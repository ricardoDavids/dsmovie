import { useParams } from 'react-router-dom';

import FormCard from 'components/FormCard';

    //Vamos agora fazer com que este Form receba esse movie como argumento
    /*Então e agora como eu faço para que este formulario ele capture o argumento que foi passado na rota como porexemplo form/2
    Como eu pego esse 2?
    
    
    Então eu irei usar o tal do use params que vai receber useParams e agora com esse parametro eu posso acesar aquele numero2 do form/2*/
    function Form() { 

         //Eu vou criar aqui um componente que na verdade esse componente é que vai criar aqui o "card" para mim, ou seja, o Form
    const params = useParams();

    return (
       <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form; //Está exportado aqui o nosso componente

//<button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>  --> o botão cancelar volta para a tela de listágem(onde estão as imagens com as estrelas e as avaliaçoes e onde tem o botão avaliar) 

//Nota: 
// O botão avaliar redireciona te para a tela do formulario(é a tela que tem as textBox para colocar o email e informa avaliação e dpois os botoes salvar e cancelar)

//Nota importante: o nosso Form agora simplesmente vai pegar o parametro da requesição e repassar para o FormCard