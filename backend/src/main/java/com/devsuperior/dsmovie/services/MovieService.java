package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service // esta anotation aqui ela vai registrar um movieService como sendo um componente do Sistema, esse registo de componente é necessário quando sua classe é customizada quando é o caso aqui.  
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	/*Qual vai ser o tipo de retorno do metodo findAll, vai ser uma lista de movie ou uma lista de MovieDTO?
	 * 
	 *  Vai ter que ser uma lista de MovieDTO porque quando o serviço for devolver essa resposta para o Controlador  tem que ser DTO,
	 *  entao aqui neste caso o retorno do metodo vai ser uma lista de MovieDTO porque eu vou querer resolver toda a transação aqui dentro do service e devolver um objecto simples sem transação */
	
	
	@Transactional(readOnly = true)
	public Page<MovieDTO>findAll(Pageable pageable) {
		Page<Movie>result= repository.findAll(pageable);
		//Agora vou ter converter uma pagina de Movie para uma pagina de MovieDTO ATRAVÉS de uma função de alta ordem.
		//Por exemplo o map vai aplicar uma função a cada elemento da lista, para cada elemento de x, vou querer um resultado que é um novo MovieDTO de x
		//Depois vou poder retornar essa pagina
		Page<MovieDTO> page= result.map(x-> new MovieDTO(x));
		return page;
		
		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result= repository.findById(id).get();
		//Agora vou ter converter uma pagina de Movie para uma pagina de MovieDTO ATRAVÉS de uma função de alta ordem.
		//Por exemplo o map vai aplicar uma função a cada elemento da lista, para cada elemento de x, vou querer um resultado que é um novo MovieDTO de x
		//Depois vou poder retornar essa pagina
		MovieDTO dto= new MovieDTO(result);//Converti o que entidade movie para MovieDTO
		return dto;
		
		
	}
}
