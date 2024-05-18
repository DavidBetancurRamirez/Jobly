import useAuth from "../../hooks/useAuth";
import { useState, useRef } from "react";
import useRegresar from "../../hooks/useRegresar";
import validaciones from "../../utils/validaciones";
import Regresar from "../../elements/Regresar";

import { MdEmail } from "react-icons/md";
import { FaUserCircle, FaEye, FaEyeSlash  } from "react-icons/fa";
import { Fondo, CPrincipal, CHeader, Header, CContenido, Logo, Formulario, CInput, Input, CMantenerS, CError, Boton, CFooter  } from '../../styles/sesion'


const Sesion = () => {
    // where the user is located
    const [inLogin, setInLogin] = useState(true);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password2, setPassword2] = useState("");
    const [showPassword2, setShowPassword2] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [errPassword, setErrPassword] = useState(false)
    const [admin, setAdmin] = useState(false)
    const errRef = useRef()

    const { signIn, signUp, persist, setPersist } = useAuth()
    const regresar = useRegresar()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const [errorValidacion, err] = validaciones({inLogin, name, email, password, password2})
        setErrPassword(err==="pwd")

        if (errorValidacion) {
            setErrMsg(errorValidacion)
            errRef.current.focus()
            return;
        }

        try {
            let response;

            if (inLogin) {
                response = await signIn({
                    name,
                    email,
                    password,
                    persist,
                    admin
                })
            } else {
                response = await signUp({
                    name,
                    email,
                    password,
                    persist,
                    admin
                })
            }

            if (response) {
                setErrMsg("")
                setErrPassword(false)
                regresar()
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
                setErrMsg("Email y/o contraseña incorrectos")
            } else if (error.response?.status === 409) {
                setErrMsg("El correo ya existente")
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
                    <Logo>Jobly.</Logo>
                    <Formulario onSubmit={handleSubmit}>
                        {!inLogin &&
                            <CInput>
                                <FaUserCircle />
                                <Input 
                                    required
                                    autoComplete="username"
                                    type="text"
                                    id = "username"
                                    placeholder="Nombre Usuario"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </CInput>
                        }
                        
                        <CInput>
                            <MdEmail />
                            <Input 
                                required
                                autoComplete="email"
                                type="email"
                                id = "email"
                                placeholder="Correo Electronico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </CInput>
                        
                        <CInput>
                            {showPassword
                                ? <FaEye        className="click"
                                                onClick={() => setShowPassword(!showPassword)} />
                                : <FaEyeSlash   className="click"
                                                onClick={() => setShowPassword(!showPassword)} />
                            }
                            <Input 
                                required
                                type={showPassword ? "text" : "password"}
                                id = "Password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </CInput>

                        {!inLogin &&
                            <CInput>
                                {showPassword2
                                    ? <FaEye    className="click"
                                                onClick={() => setShowPassword2(!showPassword2)} />
                                    : <FaEyeSlash   className="click"
                                                    onClick={() => setShowPassword2(!showPassword2)} />
                                }
                                <Input 
                                    required
                                    type={showPassword2 ? "text" : "password"}
                                    id = "Password2"
                                    placeholder="Verificar contraseña"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
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

                        {inLogin &&
                            <CMantenerS>
                                <input 
                                    type="checkbox" 
                                    id="admin"
                                    onChange={() => setAdmin(!admin)}
                                    checked={admin}
                                />
                                <label htmlFor="admin">¿Admin?</label>
                            </CMantenerS>
                        }

                        <CError ref={errRef} className={!errMsg && "offscreen"}>
                            {!errPassword
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

                        <Boton type="submit">{inLogin ? "Iniciar sesión" : "Registrarse"}</Boton>

                        <hr />

                        <CFooter $orden={inLogin}>
                            {inLogin &&
                                <a href="/recuperar-contraseña">¿Olvidaste la contraseña?</a>
                            }

                            <Regresar />
                        </CFooter>

                    </Formulario>
                </CContenido>
            </CPrincipal>
        </Fondo>
    )
}

export default Sesion;