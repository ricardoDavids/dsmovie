import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score=3.5;
    const count =13;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieScore;
//{score > 0 ? score.toFixed(1) : '-'}</p> 

//A expressão de cima é um condicional ternário, como é que ele funciona?

//Vou colocar uma condição aqui no começo e depois vou colocar um ?  ai se essa condição de começo for verdadeira, se a nota for maior que zero, ele vai mostrar o valor dessa nota que é o score  

//score.toFixed(1) --> aqui é para arredondar para uma casa decimal só

//  : '-'}</p> --> estes :(estes dois pontos) quer dizer um se não, ou seja, se esta condição for falsa, ele vai só mostrar um traço, é quando não tem avaliação do filme irá aparecer um traço (-), então isto é um condicional para imprimir ou um traço ou a nota de classificação com uma casa decimal.   

//"dsmovie-score-count">{count} avaliações --> Aqui estamos a fazer a contagem das avaliações