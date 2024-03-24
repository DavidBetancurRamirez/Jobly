import styled from 'styled-components'
import colores from './colores'

import ImgFondo from '../images/FondoSesion3.jpg'


export const ContenedorPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgFondo});
    background-size: cover;
    background-position: center center;
`;

export const ContenedorP = styled.div`
    margin: auto;
    max-width: 1000px;
    width: 95%;
`;

export const ContenedorH = styled.div`
    height: 50px;
    display: flex;
`;

export const Header = styled.button`
    background-color: ${props => (props.$inLogin ? colores.principal : colores.oscuro)};
    cursor: ${props => (props.$inLogin ? "auto" : "pointer")};
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 20px 20px 0 0;
    display: grid;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
`;

export const ContenedorC = styled.div`
    background-color: ${colores.principal};
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 0 0 20px 20px;

    > form { align-items: center; }
`;

export const Logo = styled.img`
    width: 140px;
    margin: 10px auto;

    @media (max-width: 550px) { 
        margin: 0px auto 5px auto;
        width: 100px; 
    }
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;

    h3 {
        font-weight: 700;
        font-size: 1.1rem;
        margin-right: 10px;
    }

    section {
        display: flex;
        width: 400px;
    }

    @media (max-width: 550px) {
        section {
            width: 100%;
        }
    }
`

export const ContInput = styled.div`
    width: 400px;
    height: 40px;
    margin: 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    opacity: .8;
    border-radius: 10px;
    border: 1px solid #fff;

    svg {
        height: 25px;
        width: 25px;
        margin-left: 5px;
    }

    @media (max-width: 550px) {
        width: 100%;
        height: 100%;
    }
`

export const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    height: 100%;
`

export const Boton = styled.button`
    background: ${colores.oscuro};
    border: none;
    border-radius: 10px;
    width: 180px;
    height: 50px;
    margin: 20px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover { background-color: ${colores.claro}; }

    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }
`