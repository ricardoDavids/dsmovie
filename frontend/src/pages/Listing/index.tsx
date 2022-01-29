import MovieCard from "components/MovieCard";
import axios from "axios";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing(){

    //Forma ERRADA

    //Fazer primeiramente um pequeno teste de Forma errada só para ver se está fazendo requesição:
    //Este Get faz uma requesição get e posso passar entre (URL)

    /*Só com isto aqui a minha app Frontend já faz requesição, só que o resultado da requesição
    é uma promisse, um objecto que encapsula uma acção que pode acontecer depois. 
    
    Por exemplo, para vc executar uma coisa depois que a requesição chegar á resposta dela, depois que chegar a resposta, vc tera que colocar na frente da chamada do get, a palavra then
    e depois o que colocar dentro do then vai ser executado depois que a requesição voltar,
    porque a requesição que vc faz aqui, ou seja, esse get pode demorar um tempo para chegar, ou seja, é uma operação assincrona, tudo continua executando mas quando chegar a resposta, entao ai eu vou querer executar uma coisa dentro do then.  */
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(responseRequisicao => {
                console.log(responseRequisicao.data);//Console.log que é o console do navegador e data é um atributo e é onde vem o corpo da resposta e ai vou imprimir na consola do navegador
            });

    return(
        <>
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