export const validarName = ({ name }) => {
    const minNameLength = 0;
    const maxNameLength = 50;

    const nameValido =  name.length > minNameLength && 
                        name.length <= maxNameLength

    return !nameValido && [`Longitud maxima nombre de usuario: ${maxNameLength} caracteres`, "name"];
}

export const validarEmail = ({ email }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !emailRegex.test(email) && ["Email no valido", "email"];
}

export const validarPwd = ({ password }) => {
    const minPwdLength = 8;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,\-_]).{8,}$/;

    const passwordValida =  password.length >= minPwdLength && 
                            passwordRegex.test(password);

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

export const validarPwdIguales = ({ password, password2 }) => {
    return password!==password2 && ["Las contraseñas no coinciden", "pwd iguales"];
}

const validaciones = ({inLogin, name, email, password, password2}) => {
    const funcionesValidacion = inLogin 
                                    ? [validarEmail, validarPwd]
                                    : [validarName, validarEmail, validarPwd, validarPwdIguales]
    
    for (const funcion of funcionesValidacion) {
        const mensajeError = funcion({ name, email, password, password2 });

        if (mensajeError) return mensajeError;
    }
    
    return [undefined, "Validacion exitosa"]; // Si todas las validaciones son exitosas
}

export default validaciones