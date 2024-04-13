import styled from "styled-components"
import colores from "../styles/colores"
import { FaArrowCircleDown  } from "react-icons/fa";
import { useState } from "react";

const Contenedor = styled.section`
    margin: 10px auto;
    width: 300px;
    color: #fff;
`
const Titulo = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colores.principal};
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;

    p {
        font-weight: bold;
        font-size: 1.3rem;
    }

    svg {
        width: 1.3rem;
        height: 1.3rem;
    }

    &:hover {
        p { text-decoration: underline; }
    }
`
const Contenido = styled.article`
    background-color: ${colores.claro};
    padding: 18px;
    border-radius: 15px;
    text-align: justify;
`

const BtnDesplegable = ({ info }) => {
    const [open, setOpen] = useState(false)

    return (
        <Contenedor>
            <Titulo onClick={() => setOpen(!open)}>
                <p>{info.titulo}</p>
                <FaArrowCircleDown  />
            </Titulo>
            {open &&
                <Contenido>{info.contenido}</Contenido>
            }
        </Contenedor>
    )
}

export default BtnDesplegable