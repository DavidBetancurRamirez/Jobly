import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom"

import { Axios } from "axios";
import { API_URL } from "../utils/constants";

import Jobly from "../images/jobly.png";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ContenedorPrincipal, ContenedorP, ContenedorH, Header, ContenedorC, Logo, Formulario, ContInput, Input, Boton } from '../styles/sesion'


const Sesion = () => {
    // Para saber en que pestaña se encuentra el usuario
    const [inLogin, changeInLogin] = useState(true);

    const [username, changeUsername] = useState("");
    const [email, changeEmail] = useState("");
    const [password, changePassword] = useState("");
    const [password2, changePassword2] = useState("");

    const auth = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Axios.post(`${API_URL}`)
            
            if (response.ok) {
                console.log("Si dio")

                const json = await response.json()

                if (json.body.accessToken && json.body.refreshToken) {
                    auth.saveUser(json)

                    navigate("/")
                }
            } else {
                console.log("No dio")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        !auth.isAuthenticated ?
            <ContenedorPrincipal>
                <ContenedorP>
                    <ContenedorH>
                        <Header $inLogin={inLogin} onClick={() => changeInLogin(true)}>Iniciar Sesión</Header>
                        <Header $inLogin={!inLogin} onClick={() => changeInLogin(false)}>Registrarse</Header>
                    </ContenedorH>

                    <ContenedorC>
                        <Logo src={Jobly} alt="Logo Jobly" />
                        <Formulario onSubmit={handleSubmit}>
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

                            {!inLogin &&
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
                            }

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

                            {!inLogin &&
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
                            }

                            <Boton>Registrarse</Boton>
                        </Formulario>
                    </ContenedorC>
                </ContenedorP>
            </ContenedorPrincipal>
        :
            <Navigate to={"/"} />
    )
}

export default Sesion;