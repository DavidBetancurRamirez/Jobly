import Menu from "../elements/Menu";
import { pages } from "../utils/pages";

import styled from "styled-components";
import colores from "../styles/colores";
import LogoB from "../images/jobly.png";
import { FaUserCircle } from "react-icons/fa";

const Contenedor = styled.div`
    background-color: ${colores.azulGris};
    height: 100px;
    width: 100vw;
    padding: 15px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`
const Navegar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    height: 100%;
    cursor: pointer;
`
const Botones = styled.div`
    display: flex;
    margin-left: 20px;

    p {
        margin-right: 15px;
        color: #fff;
        transition: all 0.3s;
        text-transform: capitalize;
        cursor: pointer;
    }

    p:hover, p.active {
        color: ${colores.grisClaro};
    }

    @media (max-width: 800px) {
        display: none;
    }
`
const Usuario = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    svg {
        height: 40px;
        width: 40px;
        margin-left: 5px;
        cursor: pointer;
    }

    @media (max-width: 800px) {
        display: none;
    }
`


const Header = ({ paginaActual }) => {
    return (
        <Contenedor>
            <Menu paginaActual={paginaActual} />
            <Navegar>
                <Logo src={LogoB} alt="Logo Jobly" />
                <Botones>
                    {pages.map((page, index) => (
                        <p key={index} className={paginaActual===page.name ? "active" : ""}>{page.name}</p>
                    ))}
                </Botones>
            </Navegar>
            <Usuario>
                <p>Anonymous</p>
                <FaUserCircle />
            </Usuario>
        </Contenedor>
    )
}

export default Header;