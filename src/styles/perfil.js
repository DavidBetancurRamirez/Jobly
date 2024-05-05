import styled from 'styled-components';
import colores from '../styles/colores';

export const CPrincipal = styled.div`
    display: flex;

    @media (max-width: 790px) {
        flex-direction: column;
    }
`
export const CInfoBasica = styled.section`
    background-color: ${colores.principal};
    width: 250px;
    min-height: calc(100vh - 236px);
    padding: 15px;

    @media (max-width: 790px) {
        width: 100%;
        height: auto;
        min-height: 0;
        align-items: center;
    }
`
export const Imagen = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: ${props => (props.$width ? props.$width : "200px")};
    height: ${props => (props.$height ? props.$height : "200px")};
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid ${colores.claro};

    img {
        width: 100%;
        height: 100%;
    }
`
export const Datos = styled.article`
    margin-top: 15px;
    text-align: center;

    p { 
        color: #fff;
        margin-bottom: 10px;
    }

    p:first-child {
        font-weight: bold;
        font-size: 1.2rem;
    }
`
export const CInfo = styled.section`
    margin: 20px;
`
export const Info = styled.article`
    margin-bottom: 20px;

    .titulo {
        font-weight: bold;
        font-size: 1.2rem;
        margin-left: 30px;
        margin-bottom: 10px;
    }
`
export const CCertificados = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`
export const Certificado = styled.div`
    width: 250px;
    text-align: center;

    .name {
        background-color: ${colores.principal};
        color: #fff;
        padding: 10px;
        font-weight: 1.1rem;
        border-radius: 10px 10px 0 0;
    }

    .type {
        padding: 10px;
        border-radius: 0 0 10px 10px;
        background-color: ${colores.celeste};
    }

    @media (max-width: 554px) {
        width: 100%;
    }
`
export const IExtra = styled.div`
    display: flex;
    margin-bottom: 10px;

    .name {
        color: #fff;
        padding: 10px;
        min-height: 100px;
        font-size: 1.1rem;
        font-weight: bold;
        width: 150px;
        display: grid;
        text-align: center;
        place-items: center;
        border-radius: 10px 0 0 10px;
        background-color: ${colores.claro};
    }

    .description {
        width: 100%;
        padding: 15px;
        display: flex;
        place-items: center;
        text-align: justify;
        white-space: pre-wrap;
        background-color: #fff;
        border-radius: 0 10px 10px 0;
    }

    @media (max-width: 550px) {
        .name { 
            padding: 5px;
            width: 150px;
        }
    }
`
export const Review = styled.div`
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #fff;

    p {
        white-space: pre-wrap;
        text-align: justify;
    }
    .date { font-size: 0.9rem; }
    .into { display: none }

    @media (max-width: 550px) {
        .midle { display: none }
        .into { 
            display: block;
            margin-top: 2px;
        }
    }
`
export const CReviewInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    .estrellas {
        span { font-size: 1.3rem; }
    }
`
export const CReviewUser = styled.div`
    display: flex;
    align-items: center;

    div { margin-left: 5px; }
    p { font-weight: bold; }
`