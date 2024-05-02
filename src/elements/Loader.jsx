import styled from 'styled-components'
import colores from '../styles/colores'


const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
`
const LoaderStyle = styled.div`
    width: 50px;
    height: 50px;
    aspect-ratio: 1;
    display: grid;
    animation: l14 4s infinite;
    overflow-x: visible;

    &::before, &::after {    
        content: "";
        grid-area: 1/1;
        border: 8px solid;
        border-radius: 50%;
        border-color: ${colores.principal} ${colores.principal} #0000 #0000;
        mix-blend-mode: darken;
        animation: l14 1s infinite linear;
    }
    &::after {
        border-color: #0000 #0000 ${colores.claro} ${colores.claro};
        animation-direction: reverse;
    }

    @keyframes l14{ 
        100%{transform: rotate(1turn)}
    }
`


const Loader = () => {
    return (
        <Contenedor>
            <LoaderStyle />
        </Contenedor>
    )
}

export default Loader