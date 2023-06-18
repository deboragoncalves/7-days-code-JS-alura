import logo from '../assets/logo.png';

function Menu() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <ul className="list-menu">
                <li>Como fazer&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Ofertas&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Depoimentos&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Vídeos&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Meu carrinho</li>
            </ul>
        </header>
    );
  }
  
export default Menu;