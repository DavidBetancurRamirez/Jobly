import { useState } from "react";

import Empleador from '../images/empleador.png';
import Proveedor from '../images/proveedor.png';
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { Formulario, ContInput, Input, Boton, Perfil } from "../styles/sesion";


const SignUp = () => {
    // Estados con la informacion de los inputs
    const [profile, changeProfile] = useState("empleador");
    const [username, changeUsername] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");

    return (
        <Formulario>
            <section>
                <Perfil onClick={() => changeProfile("empleador")} $profile={profile==="empleador"}>
                    <img src={Empleador} alt="Empleador" />
                    <p>Empleador</p>
                </Perfil>
                <Perfil onClick={() => changeProfile("proveedor")} $profile={profile==="proveedor"}>
                    <img src={Proveedor} alt="Proveedor" />
                    <p>Proveedor</p>
                </Perfil>
            </section>

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

            <Boton>Registrarse</Boton>
        </Formulario>
    )
}

export default SignUp;