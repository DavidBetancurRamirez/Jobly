export const validarUsername = ({ username }) => {
    const minUsernameLength = 0;
    const maxUsernameLength = 50;

    const usernameValido =  username.length > minUsernameLength && 
                            username.length <= maxUsernameLength

    return !usernameValido && [`Longitud maxima nombre de usuario: ${maxUsernameLength} caracteres`, "username"];
}

export const validarEmail = ({ email }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !emailRegex.test(email) && ["Email no valido", "email"];
}

export const validarPwd = ({ pwd }) => {
    const minPwdLength = 8;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,\-_]).{8,}$/;

    const passwordValida =  pwd.length >= minPwdLength && 
                            passwordRegex.test(pwd);

    const mensaje = [
        "La contraseña debe contener al menos:",
        "8 caracteres.",
        "1 letra minuscula.",
        "1 letra mayuscula.",
        "1 numero.",
        "1 caracter especial"
    ]

    return !passwordValida && [mensaje, "pwd"];
}

export const validarPwdIguales = ({ pwd, pwd2 }) => {
    return pwd!==pwd2 && ["Las contraseñas no coinciden", "pwd iguales"];
}

const validaciones = ({inLogin, username, email, pwd, pwd2}) => {
    /* Mientras se cambia la validacion del backend de usuario a email
    const funcionesValidacion = inLogin 
                                    ? [validarEmail, validarPwd]
                                    : [validarUsername, validarEmail, validarPwd, validarPwdIguales]
                                    */
    const funcionesValidacion = [validarUsername, validarPwd]
    
    for (const funcion of funcionesValidacion) {
        const mensajeError = funcion({ username, email, pwd, pwd2 });

        if (mensajeError) return mensajeError;
    }
    
    return [undefined, undefined]; // Si todas las validaciones son exitosas
}

export default validaciones