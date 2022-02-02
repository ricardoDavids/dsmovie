import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './styles.css';



    type Props ={
        movieId : string; //Aqui o filme vai receber o Id
    }

    //Vamos agora fazer com que este Form receba esse movie como argumento
    /*Então e agora como eu faço para que este formulario ele capture o argumento que foi passado na rota como porexemplo form/2
    Como eu pego esse 2?
    
    Então eu irei usar o tal do use params que vai receber useParams e agora com esse parametro eu posso acesar aquele numero2 do form/2*/
    function FormCard( { movieId } : Props) { 

      // const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    //Vamos usar aqui useEffect para fazer a requesição, vou querer executar uma requesição que é o axios.get 
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie(response.data);
        });
    }, [movieId]); // este movieId que chegou de argumento no Props vai vir como dependencia do nosso useEffect, porque se nao colocasse como dependencia, essa requeisção iria sendo feita varia vezes porque utilizamos o valor dele depois do /movies/${movieId} e depois temos que informar que só vamos fazer a requesição de novo quando o valor dele mudar

  
    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to= "/">
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard; //Está exportado aqui o nosso componente

//<button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>  --> o botão cancelar volta para a tela de listágem(onde estão as imagens com as estrelas e as avaliaçoes e onde tem o botão avaliar) 

//Nota: 
// O botão avaliar redireciona te para a tela do formulario(é a tela que tem as textBox para colocar o email e informa avaliação e dpois os botoes salvar e cancelar)

// ? --> significa que se existir ele retorna algo se não, não irá retornar nada