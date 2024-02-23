import { useState } from "react";
import { pages } from "../functions/pages";

import styled from "styled-components";
import colores from "../styles/colores";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const BotonMenu = styled.span`
    @media (min-width: 800px) {
        display: none;
    }

    svg {
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
    }
`
const Contenedor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 100vh;
    background-color: ${colores.azulGris};
    padding: 15px 10px;
    z-index: 10;
`
const Navegar = styled.nav`
    margin: 20px 10px;

    div {
        border-bottom: 1px dashed #fff;
        margin-bottom: 10px;
    }

    .active {
        color: ${colores.grisClaro};
    }

    .ultimo {
        border-top: 1px dashed #fff;
        padding-top: 10px;
    }
`
const Link = styled.section`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 20px;

    img, svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    span { text-transform: capitalize; }
`


const Menu = ({ paginaActual }) => {
    const [visible, cambiarVisible] = useState(false);

    return (
        <BotonMenu>
            {visible ?
                <Contenedor>
                    <AiOutlineClose onClick={() => cambiarVisible(false)} />
                    <Navegar>
                        {pages.map((page, index) => {
                            return (
                                <Link   
                                    key={index}
                                    className={
                                        ( paginaActual === page.name ? "active " : "" ) +
                                        ( index === (pages.length-1) ? "ultimo" : "" )
                                    }
                                >
                                    <page.icon />
                                    <span>{page.name}</span>
                                </Link>
                            );
                        })}
                    </Navegar>
                </Contenedor>
            :
                <GiHamburgerMenu onClick={() => cambiarVisible(true)} />
            }
        </BotonMenu>
    )
}

export default Menu;