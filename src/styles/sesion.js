import styled from 'styled-components'
import colores from './colores'

import ImgFondo from '../images/FondoSesion.jpg'


export const ContenedorPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    a {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.8rem;
        color: #000;
    }
`;

export const Fondo = styled.div`
    background-image: url(${ImgFondo});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.6;
`;

export const ContenedorP = styled.div`
    position: relative;
    margin: auto;
    max-width: 1000px;
    width: 95%;
`;

export const ContenedorH = styled.div`
    height: 50px;
    display: flex;
`;

export const Header = styled.button`
    background-color: ${props => (props.$inLogin ? colores.azulMedio : colores.azulOscuro)};
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
    background-color: ${colores.azulMedio};
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 0 0 20px 20px;

    > form { align-items: center; }
`;

export const Logo = styled.img`
    width: 150px;
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
    background: ${colores.azulOscuro};
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
    transition: 0.4s;

    &:hover { background: ${colores.azulGris}; }

    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }
`

export const Perfil = styled.article`
    background-color: ${props => (props.$profile ? colores.azulGris : colores.grisOscuro)};
    opacity: ${props => (props.$profile ? 1 : 0.5)};
    border: 2px dashed ${colores.azulOscuro};
    margin: 0px 15px 10px 15px;
    width: 50%;
    height: 200px;
    cursor: pointer;

    img {
        width: 100%;
        height: 90%;
    }

    p {
        color: #fff;
        text-align: center;
        font-weight: bold;
    }

    @media (max-width: 550px) {
        margin: 5px;
        height: 150px;
    }
`