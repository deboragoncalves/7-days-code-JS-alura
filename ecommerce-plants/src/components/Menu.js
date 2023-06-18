import logo from '../assets/logo.png';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48.84px;

    ul li {
        cursor: pointer;
    }

    img {
        padding: 10px 30px;
        display: flex;
        align-items: center;
    }
`;

const ListMenu = styled.ul`
    display: flex;
    height: 20px;

    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 20px;

    color: #202020;
    padding: 10px 30px;
`;

function Menu() {
    return (
        <Header>
            <img src={logo} alt="Logo" />
            <ListMenu>
                <li>Como fazer&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Ofertas&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Depoimentos&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Vídeos&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</li>
                <li>Meu carrinho</li>
            </ListMenu>
        </Header>
    );
  }
  
export default Menu;