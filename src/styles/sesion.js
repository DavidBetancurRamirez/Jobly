import styled from 'styled-components'
import colores from './colores'
import ImgFondo from '../images/FondoSesion.jpg'


export const Fondo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgFondo});
    background-size: cover;
    background-position: center center;
`;

export const CPrincipal = styled.div`
    margin: auto;
    width: 95%;
    max-width: 1000px;
`;

export const CHeader = styled.div`
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

export const CContenido = styled.div`
    background-color: ${colores.principal};
    padding: 20px;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Logo = styled.article`
    margin: auto;
    margin-bottom: 20px;
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
`;

export const Formulario = styled.form`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;

    h3 {
        font-weight: 700;
        font-size: 1.1rem;
        margin-right: 10px;
    }

    hr {
        width: 80%;
        height: 0;
        border: medium none;
        border-top: 1px dashed ${colores.celeste} !important;
        margin: 10px auto;
    }

    .offscreen { display: none; }

    @media (max-width: 550px) {
        width: 100%;
    }
`

export const CInput = styled.div`
    width: 100%;
    height: 40px;
    margin: 5px auto;
    display: flex;
    align-items: center;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 10px;
    border: 1px solid #fff;

    svg {
        height: 25px;
        width: 25px;
        margin-left: 5px;
    }

    .click { cursor: pointer; }

    @media (max-width: 550px) {
        height: 100%;
    }
`

export const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
`

export const Boton = styled.button`
    background: ${colores.oscuro};
    border: none;
    border-radius: 10px;
    width: 180px;
    height: 50px;
    margin: 5px auto;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover { color: ${colores.claro}; }

    @media (max-width: 550px) {
        width: 160px;
        height: 45px;
    }
`

export const CMantenerS = styled.article`
    margin: 5px auto;
    display: flex;

    input, label { cursor: pointer; }
    
    label {
        margin-left: 5px;
        color: ${colores.celeste};
    }
`

export const CError = styled.article`
    margin: 5px 0px;
    background-color: ${colores.oscuro};
    color: ${colores.celeste};
    padding: 10px;
    border-radius: 10px;

    ul {
        margin-left: 25px;

        li:first-child {
            list-style-type: none;
            margin-left: -25px;
            margin-bottom: 2px;
        }
    }
`

export const CFooter = styled.article`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.$orden ? "space-between" : "end")};
    
    a {
        color: ${colores.celeste};
        text-decoration: underline;
        opacity: 0.9;
    }
`
