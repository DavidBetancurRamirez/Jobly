import useAuth from "../hooks/useAuth";
import { useState, useRef } from "react";
import { axiosPrivate } from "../api/axios";
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
    const [pwd, setPwd] = useState("");
    const [showpwd, setShowPwd] = useState(false);
    const [pwd2, setPwd2] = useState("");
    const [showpwd2, setShowPwd2] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [errPwd, setErrPwd] = useState(false)
    const errRef = useRef()

    const { setAuth, persist, setPersist } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const [errorValidacion, err] = validaciones({inLogin, username, email, pwd, pwd2})

        if (errorValidacion) {
            setErrMsg(errorValidacion)
            setErrPwd(err==="pwd")
            errRef.current.focus()
            return;
        }

        try {
            const response = await axiosPrivate.post(
                inLogin ? '/auth' : '/register',
                JSON.stringify({ username, pwd })
            );

            if (response.data) {
                const accessToken = response.data.accessToken
    
                setAuth({ username, accessToken })
    
                localStorage.setItem("persist", persist)
    
                setErrMsg("")
                setErrPwd(false)
                navigate(from, { replace: true })
            } else {
                setErrMsg("Hubo un error, intentalo de nuevo mas tarde")
                errRef.current.focus()
            }

        } catch (error) {
            if (!error?.response) {
                setErrMsg("Sin respuesta del servidor")
            } else if (error.response?.status === 400) {
                setErrMsg("Se deben llenar todos los campos")
            } else if (error.response?.status === 401) {
                setErrMsg("Usuario y/o contraseña incorrectos")
            } else if (error.response?.status === 409) {
                setErrMsg("Usuario ya existente")
            } else {
                setErrMsg("Error en la sesión")
            }
            console.error(error)
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
                        
                        {/* Se debe hacer con el email, pero el back esta con usuario, entonces por ahora se oculta email */}
{!inLogin &&
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
}

                        <CInput>
                            {showpwd
                                ? <FaEye    className="click"
                                            onClick={() => setShowPwd(!showpwd)} />
                                : <FaEyeSlash   className="click"
                                                onClick={() => setShowPwd(!showpwd)} />
                            }
                            <Input 
                                required
                                type={showpwd ? "text" : "password"}
                                id = "pwd"
                                placeholder="Contraseña"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                            />
                        </CInput>

                        {!inLogin &&
                            <CInput>
                                {showpwd2
                                    ? <FaEye    className="click"
                                                onClick={() => setShowPwd2(!showpwd2)} />
                                    : <FaEyeSlash   className="click"
                                                    onClick={() => setShowPwd2(!showpwd2)} />
                                }
                                <Input 
                                    required
                                    type={showpwd2 ? "text" : "password"}
                                    id = "pwd2"
                                    placeholder="Verificar contraseña"
                                    value={pwd2}
                                    onChange={(e) => setPwd2(e.target.value)}
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
                            {!errPwd
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