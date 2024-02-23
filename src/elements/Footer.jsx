import { pages } from "../functions/pages";

import styled from "styled-components";
import colores from "../styles/colores";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"

const ContenedorFooter = styled.footer`
    background-color: ${colores.azulMedio};
    padding: 20px 50px 10px 50px;

    > p {
        color: #fff;
        font-size: 0.8rem;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 800px) {
        padding: 15px;

        > p { margin-top: 10px; }
    }
`
const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed #fff;
    padding-bottom: 20px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
`
const Info = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0.9rem;
    font-weight: lighter;
    width: 385px;

    @media (max-width: 800px) {
        border-bottom: 1px dashed #fff;
        padding-bottom: 15px;
        width: 100%;
        text-align: center;
    }
`
const Links = styled.div`
    p {
        color: #fff;
        margin: 5px;
        text-transform: capitalize;
        font-weight: lighter;
        transition: all 0.3s;
        cursor: pointer;
    }

    p:hover { color: ${colores.grisOscuro}; }

    > p {
        color: ${colores.grisOscuro};
        margin-bottom: 5px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: auto;
    }

    @media (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px dashed #fff;
    }
`
const Contacto = styled.div`
    p {
        color: ${colores.grisOscuro};
        margin-bottom: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: auto;
    }

    div {
        display: flex;
        transition: background-color 0.3s;
        cursor: pointer;

        > div:hover {
            background-color: ${colores.grisOscuro};
            color: #fff;
        }
    }

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding: 15px 0;
    }
`
const RedSocial = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    svg {
        width: 50%;
        height: 50%;
    }

    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`


const Footer = () => {
    return (
        <ContenedorFooter>
            <Contenedor>
                <Info>
                    Nuestra plataforma conecta a empresas como la tuya con trabajadores confiables y dispuestos a brindar apoyo en esos momentos cruciales. Ya sea que necesites meseros, personal de limpieza, atención al cliente o cualquier otro tipo de servicio laboral temporal, ¡Jobly está aquí para ayudarte!
                </Info>

                <Links>
                    <p>Links útiles</p>
                    <div>
                        <p>{pages[0].name}</p>
                        <p>{pages[1].name}</p>
                    </div>
                    <div>
                        <p>{pages[2].name}</p>
                        <p>{pages[3].name}</p>
                    </div>
                </Links>

                <Contacto>
                    <p>Contactenos</p>
                    <div>
                        <RedSocial> <AiOutlineMail /> </RedSocial>
                        <RedSocial> <BsWhatsapp /> </RedSocial>
                        <RedSocial> <AiOutlineInstagram /> </RedSocial>
                    </div>
                </Contacto>

            </Contenedor>
            <p>© Todos los derechos reservados</p>
        </ContenedorFooter>
    )
}

export default Footer;