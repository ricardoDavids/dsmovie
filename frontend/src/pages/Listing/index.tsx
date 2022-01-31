import MovieCard from "components/MovieCard";
import axios from "axios";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing(){

    const [pageNumber, setPageNumber] = useState(0); //Como a minha API retorna pagina 0 como sendo a 1ª, vou colocar entre parenteses o valor zero

    useEffect(() =>{

        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(responseRequisicao => {
            const data =responseRequisicao.data as MoviePage;
            console.log(data);//Console.log que é o console do navegador e data é um atributo e é onde vem o corpo da resposta e ai vou imprimir na consola do navegador
            setPageNumber(data.number);
           
        }).catch(error => console.log(error)); //Se tua requisição der qualquer erro, ele vai  mostrar no console qual erro q foi

    }, []);

    //Forma ERRADA

    //Fazer primeiramente um pequeno teste de Forma errada só para ver se está fazendo requesição:
    //Este Get faz uma requesição get e posso passar entre (URL)

    /*Só com isto aqui a minha app Frontend já faz requesição, só que o resultado da requesição
    é uma promisse, um objecto que encapsula uma acção que pode acontecer depois. 
    
    Por exemplo, para vc executar uma coisa depois que a requesição chegar á resposta dela, depois que chegar a resposta, vc tera que colocar na frente da chamada do get, a palavra then
    e depois o que colocar dentro do then vai ser executado depois que a requesição voltar,
    porque a requesição que vc faz aqui, ou seja, esse get pode demorar um tempo para chegar, ou seja, é uma operação assincrona, tudo continua executando mas quando chegar a resposta, entao ai eu vou querer executar uma coisa dentro do then.  */
   
       

    return(
        <>
            <p>{pageNumber}</p>
                <Pagination />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                </div>
        </> 
        
    );
}

export default Listing; //Está exportado aqui o nosso componente