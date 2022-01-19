import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing'; // Aqui será uma pagina Listing
import Form from 'pages/Form'; //Aqui será uma pagina Form
import Navbar from "components/Navbar";

function App() {
  return (
    //BrowserRouter para iniciar as configurações das Rotas e dentro dele ja tem o NavBar pk como todas as paginas vão ter a barrinha azul lá em cima, eu já coloco ele fora de todas as rotas 
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;


// Estou importando import 3 componentes BrowserRouter,  Routes, Route do React-router-dom que acabei de instalar
// Estes componentes vao servir para nós configurarmos as rotas 
// E tambem vou ter que importar os componentes do React que eu criei para ativar o componente em cada rota.

// Routes -> este cara é que vai configurar rota por rota   