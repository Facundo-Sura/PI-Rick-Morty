const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation (data) {
    const errors = {}

    if(!regexEmail.test(data.email)) errors.email = 'Debe ser un email';

    if(!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres'

    return errors;
}

export default validation