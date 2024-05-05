import { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import styled from 'styled-components';
import colores from '../styles/colores';

  
const Contenedor = styled.article`
    background-color: ${props => (props.$color ? props.$color : colores.principal)};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 100px;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;

    p { text-align: center; }
`
const Titulo = styled.article`
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
    border-bottom: 2px solid black;
`

const Tarjeta = ({ info }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Contenedor
                className={`front`}
                onClick={() => setIsFlipped(!isFlipped)}
                $color={info.color}
            >
                <Titulo className="card-title">{info.nombre}</Titulo>
            </Contenedor>

            <Contenedor
                className={`back`}
                onClick={() => setIsFlipped(!isFlipped)}
                $color={info.color}
            >
                <p>{info.texto}</p>
            </Contenedor>
        </ReactCardFlip>
    )
}

export default Tarjeta