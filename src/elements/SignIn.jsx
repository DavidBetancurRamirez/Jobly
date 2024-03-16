import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { Formulario, ContInput, Input, Boton } from "../styles/sesion";


const SignIn = () => {
    // Estados con la informacion de los inputs
    const [username, changeUsername] = useState("");
    const [password, changePassword] = useState("");

    return (
        <Formulario>
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