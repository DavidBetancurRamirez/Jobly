import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useState, useRef, useEffect } from "react";
import validaciones from "../utils/validaciones";
import { useNavigate, useLocation } from "react-router-dom"

import Jobly from "../images/jobly.png";
import { MdEmail } from "react-icons/md";
import { FaUserCircle, FaEye, FaEyeSlash  } from "react-icons/fa";
import { Fondo, CPrincipal, CHeader, Header, CContenido, Logo, Formulario, CInput, Input, Boton, CMantenerS, CError  } from '../styles/sesion'


const Sesion = () => {
    // where the user is located
    const [inLogin, setInLogin] = useState(true);
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const [showPsw, setShowPsw] = useState(false);
    const [psw2, setPsw2] = useState("");
    const [showPsw2, setShowPsw2] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [errPsw, setErrPsw] = useState(false)
    const errRef = useRef()

    const { setAuth, persist, setPersist } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const [errorValidacion, err] = validaciones({inLogin, username, email, psw, psw2})

        if (errorValidacion) {
            setErrMsg(errorValidacion)
            setErrPsw(err==="psw")
            return;
        }

        try {
            if (inLogin) {
                // Iniciar sesion
                const response = await axios.post(
                    '/users', 
                    //JSON.stringify({email, psw})
                    JSON.stringify({email, password: psw})
                );
    
                const name = response?.data?.name
                const accessToken = response?.data?.accessToken
    
                setAuth({name, accessToken})
                localStorage.setItem("persist", persist)
                setErrMsg("")
                setErrPsw(false)
                navigate(from, { replace: true })
            } else {
                // Registro
                setErrMsg("")
                setErrPsw(false)
            }

        } catch (error) {
            if (!error?.response) {
                setErrMsg("Sin respuesta del servidor")
            } else if (error.response?.status === 400) {
                setErrMsg("Se deben llenar todos los campos")
            } else if (error.response?.status === 401) {
                setErrMsg("Sin autorizacion")
            } else {
                setErrMsg("Error en sesion")
            }
            console.error(error)
            console.log(errMsg)
            errRef.current.focus()
        }
    }

    return (
        <Fondo>
            <CPrincipal>
                <CHeader>
                    <Header $inLogin={inLogin} onClick={() => setInLogin(true)}>Iniciar Sesión</Header>
                    <Header $inLogin={!inLogin} onClick={() => setInLogin(false)}>Registrarse</Header>
                </CHeader>

                <CContenido>
                    <Logo src={Jobly} alt="Logo Jobly" />
                    <Formulario onSubmit={handleSubmit}>
                        {!inLogin &&
                            <CInput>
                                <FaUserCircle />
                                <Input 
                                    required
                                    type="text"
                                    id = "username"
                                    placeholder="Nombre Usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </CInput>
                        }

                        <CInput>
                            <MdEmail />
                            <Input 
                                required
                                type="email"
                                id = "email"
                                placeholder="Correo Electronico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </CInput>

                        <CInput>
                            {showPsw
                                ? <FaEye    className="click"
                                            onClick={() => setShowPsw(!showPsw)} />
                                : <FaEyeSlash   className="click"
                                                onClick={() => setShowPsw(!showPsw)} />
                            }
                            <Input 
                                required
                                type={showPsw ? "text" : "password"}
                                id = "psw"
                                placeholder="Contraseña"
                                value={psw}
                                onChange={(e) => setPsw(e.target.value)}
                            />
                        </CInput>

                        {!inLogin &&
                            <CInput>
                                {showPsw2
                                    ? <FaEye    className="click"
                                                onClick={() => setShowPsw2(!showPsw2)} />
                                    : <FaEyeSlash   className="click"
                                                    onClick={() => setShowPsw2(!showPsw2)} />
                                }
                                <Input 
                                    required
                                    type={showPsw2 ? "text" : "password"}
                                    id = "psw2"
                                    placeholder="Verificar contraseña"
                                    value={psw2}
                                    onChange={(e) => setPsw2(e.target.value)}
                                />
                            </CInput>
                        }

                        <CMantenerS>
                            <input 
                                type="checkbox" 
                                id="persist"
                                onChange={() => setPersist(!persist)}
                                checked={persist}
                            />
                            <label htmlFor="persist">Mantener sesión iniciada</label>
                        </CMantenerS>

                        <CError ref={errRef} className={!errMsg && "offscreen"}>
                            {!errPsw
                                ? errMsg
                                : (
                                    <ul>
                                        {errMsg.map((mensaje, i) => (
                                            <li key={i}>{mensaje}</li>
                                        ))}
                                    </ul>
                                ) 
                            }
                        </CError>

                        <Boton>Registrarse</Boton>
                    </Formulario>
                </CContenido>
            </CPrincipal>
        </Fondo>
    )
}

export default Sesion;