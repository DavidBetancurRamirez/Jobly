import { useState } from "react";

import Empleador from '../images/empleador.png';
import Proveedor from '../images/proveedor.png';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { Formulario, ContInput, Input, Boton } from "../styles/sesion";


const SignUp = () => {
    // Estados con la informacion de los inputs
    const [username, changeUsername] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [password2, changePassword2] = useState("");

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
                <MdEmail />
                <Input 
                    required
                    name = "email"
                    type="email"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
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

            <ContInput>
                <RiLockPasswordFill />
                <Input 
                    required
                    name = "password2"
                    type="password"
                    placeholder="Verificar contraseña"
                    value={password2}
                    onChange={(e) => changePassword2(e.target.value)}
                />
            </ContInput>

            <Boton>Registrarse</Boton>
        </Formulario>
    )
}

export default SignUp;