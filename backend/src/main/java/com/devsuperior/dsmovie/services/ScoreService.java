package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service // esta anotation aqui ela vai registrar um movieService como sendo um componente do Sistema, esse registo de componente é necessário quando sua classe é customizada quando é o caso aqui.  
public class ScoreService {

	/*chama se programação defensiva, isto serve para nao permitir alguem que uqeira injectar algo malicioso no atributo */
	private final MovieRepository movieRepository;
	
	
	//Agora vou fazer aqui uma composição de componentes com os outros 2 repositos;
	
	private final UserRepository userRepository;
	
	private final ScoreRepository scoreRepository;

	@Autowired
	public ScoreService(MovieRepository movieRepository,UserRepository userRepository, ScoreRepository scoreRepository) {
		this.movieRepository= movieRepository;
		this.userRepository= userRepository;
		this.scoreRepository= scoreRepository;
	}

	//Agora vamos criar um metodo para salvar um novo Score no banco de dados apartir do objecto ScoreDTO que nós fizemos lá no Controlador;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user= userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user= userRepository.saveAndFlush(user);
		}
		
		Movie movie= movieRepository.findById(dto.getMovieId()).get();
		
		
		Score score= new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		//Agora vamos salvar o score:
		score= scoreRepository.saveAndFlush(score);
		
		//preparamos em memoria o objecto Score já com os 3 dados e depois vou ter que salvar e ao mesmo tempo trazer os resultados para o front end, ou seja, retornar nele mesmo a referencia para o objecto salvo
		//Entao salvamos no banco de dados o usuario e tambem salvamos o objecto score que tem avalliaçao
		
		
		//Eu agora vou ter acesso a lista de scores associadas a esse filme
		//Vou fazer um for, ou seja, para cada score s dentro do meu movie.getScores(), estou fazendo aqui um for para percorrer todos os scores dentro de um certo filme.
		//Agora vou fazer um algoritmo para calcular a soma, sempre que eu passar aqui num movie.getScores(), que eu dei um apelido de s, a soma vai receber o que já estava nela mesma e
		// mais o s.getValue() que é o valor de cada Score;
		
		//Entao com issso eu estou percorrendo a minha lista de scores acumulando a soma de todos os valores na variavel sum
		
		//Agora que já tenho a soma de todas as notas, agora é fazer a media e a média é a soma a dividir pela quantidade.
		double sum= 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		
		//Calcular a média
		double avg= sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		//Salvar o movie com a média e com o numero de contagens de avaliações ou scores(pontuações);
		movie= movieRepository.save(movie);
		
		return new MovieDTO(movie); //Aqui estou convertendo para DTO
	}
	
	
	
	
}
