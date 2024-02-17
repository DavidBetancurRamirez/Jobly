import { useState } from "react";

import Jobly from "../images/jobly.png";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { Formulario, ContInput, Input, Boton, Logo } from "../styles/sesion";


const SignIn = () => {
    // Estados con la informacion de los inputs
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");

    return (
        <Formulario>
            <Logo src={Jobly} alt="Logo Jobly" />

            <ContInput>
                <FaUserCircle />
                <Input 
                    required
                    name = "username"
                    type="text"
                    placeholder="Nombre Usuario"
                    value={username}
                    onChange={(e) => changeUsername(e.target.value)}
                />
            </ContInput>

            <ContInput>
                <RiLockPasswordFill />
                <Input 
                    required
                    name = "password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                />
            </ContInput>

            <Boton>Iniciar Sesión</Boton>
        </Formulario>
    )
}

export default SignIn;