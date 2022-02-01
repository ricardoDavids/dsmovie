import MovieCard from "components/MovieCard";
import axios from "axios";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0); //Como a minha API retorna pagina 0 como sendo a 1ª, vou colocar entre parenteses o valor zero


    //Agora aqui em baixo vou criar outro estado para guardar no componente a página carregada
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });



    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)// aqui o sort é para dizer que os filmes sempre virão na mesma ordem, ordenados por ID ouo por exemplo por title
            .then(responseRequisicao => {
                const data = responseRequisicao.data as MoviePage;
                // console.log(data);//Console.log que é o console do navegador e data é um atributo e é onde vem o corpo da resposta e ai vou imprimir na consola do navegador
                // setPageNumber(data.number);
                setPage(data);

           // }).catch(error => console.log(error)); //Se tua requisição der qualquer erro, ele vai  mostrar no console qual erro q foi
            });
    }, [pageNumber]);

    //Forma ERRADA

    //Fazer primeiramente um pequeno teste de Forma errada só para ver se está fazendo requesição:
    //Este Get faz uma requesição get e posso passar entre (URL)

    /*Só com isto aqui a minha app Frontend já faz requesição, só que o resultado da requesição
    é uma promisse, um objecto que encapsula uma acção que pode acontecer depois. 
    
    Por exemplo, para vc executar uma coisa depois que a requesição chegar á resposta dela, depois que chegar a resposta, vc tera que colocar na frente da chamada do get, a palavra then
    e depois o que colocar dentro do then vai ser executado depois que a requesição voltar,
    porque a requesição que vc faz aqui, ou seja, esse get pode demorar um tempo para chegar, ou seja, é uma operação assincrona, tudo continua executando mas quando chegar a resposta, entao ai eu vou querer executar uma coisa dentro do then.  */






    return (
        <>

            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing; //Está exportado aqui o nosso componente

// Para cada movie na minha lista eu vou renderizar esse div aqui do trecho de codigo infra:

/*<div className="container">
                    <div className="row">
                       </div></div> {pagecontent.map(movi =>(
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div> */


                        //<div key={movie.id} --> isto quer dizer o seguinte: que tem que ser um valor unico para cada atributo quando estamos a fazer a renderização