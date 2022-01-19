import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';
// Acabei de fazer o meu 1º componente que é uma função do JS retornando o codigo jfx e depois exporto a função em baixo
// e no outro componente que é o App.tsx eu vou poder chamar ele aqui, ou seja, <NavBar /> 
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/ricardoDavids" >
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}
export default Navbar;

//TODOS os estilos de Navegação vou começar com DSmovie para gantir que seja nome unico para que nao entre em conflito que ja tenha no bootstrap.
// <div className="dsmovie-nav-content"> --> é como se fosse conteudo de navegação do DSMovie
//container é uma classe do Bootstrap ele vai delimitar a largura do nosso conteudo
