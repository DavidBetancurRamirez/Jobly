import { useState } from "react";

import SignIn from "../elements/SignIn";
import SignUp from "../elements/SignUp";
import { ContenedorPrincipal, Fondo, ContenedorP, ContenedorH, Header, ContenedorC } from '../styles/sesion'


const Sesion = () => {
    // Para saber en que pestaña se encuentra el usuario
    const [inLogin, changeInLogin] = useState(true);

    return (
        <ContenedorPrincipal>
            <Fondo />
            <ContenedorP>
                <ContenedorH>
                    <Header $inLogin={inLogin} onClick={() => changeInLogin(true)}>Iniciar Sesión</Header>
                    <Header $inLogin={!inLogin} onClick={() => changeInLogin(false)}>Registrarse</Header>
                </ContenedorH>

                <ContenedorC>
                    {inLogin    ? <SignIn />
                                : <SignUp /> }
                </ContenedorC>
            </ContenedorP>
            <a href="https://storyset.com/work" target="_blank">Work illustrations by Storyset</a>
        </ContenedorPrincipal>
    )
}

export default Sesion;