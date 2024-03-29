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

export const validarPsw = ({ psw }) => {
    const minPswLength = 8;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,\-_]).{8,}$/;

    const passwordValida =  psw.length >= minPswLength && 
                            passwordRegex.test(psw);

    const mensaje = [
        "La contraseña debe contener al menos:",
        "8 caracteres.",
        "1 letra minuscula.",
        "1 letra mayuscula.",
        "1 numero.",
        "1 caracter especial"
    ]

    return !passwordValida && [mensaje, "psw"];
}

export const validarPswIguales = ({ psw, psw2 }) => {
    return psw!==psw2 && ["Las contraseñas no coinciden", "psw iguales"];
}

const validaciones = ({inLogin, username, email, psw, psw2}) => {
    const funcionesValidacion = inLogin 
                                    ? [validarEmail, validarPsw]
                                    : [validarUsername, validarEmail, validarPsw, validarPswIguales]
    
    for (const funcion of funcionesValidacion) {
        const mensajeError = funcion({ username, email, psw, psw2 });

        if (mensajeError) return mensajeError;
    }
    
    return [undefined, undefined]; // Si todas las validaciones son exitosas
}

export default validaciones