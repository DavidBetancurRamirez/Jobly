import { useState } from "react";

import SignIn from "../elements/SignIn";
import SignUp from "../elements/SignUp";
// import Google from "../elements/Google";
import { ContenedorPrincipal, ContenedorP, ContenedorH, Header, ContenedorC, Logo } from '../styles/sesion'
import Jobly from "../images/jobly.png";


const Sesion = () => {
    // Para saber en que pestaña se encuentra el usuario
    const [inLogin, changeInLogin] = useState(true);

    return (
        <ContenedorPrincipal>
            <ContenedorP>
                <ContenedorH>
                    <Header $inLogin={inLogin} onClick={() => changeInLogin(true)}>Iniciar Sesión</Header>
                    <Header $inLogin={!inLogin} onClick={() => changeInLogin(false)}>Registrarse</Header>
                </ContenedorH>

                <ContenedorC>
                    <Logo src={Jobly} alt="Logo Jobly" />
                    {inLogin    ? <SignIn />
                                : <SignUp /> }
                    {/* <Google /> */}
                </ContenedorC>
            </ContenedorP>
        </ContenedorPrincipal>
    )
}

export default Sesion;