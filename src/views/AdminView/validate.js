export const validatePlateForm = ({ name, price }) => {
    let result = {
        error: {},
        valid: true
    };
    if (!name || name.trim().length === 0) {
        result.error.name = true;
        result.valid = false;
    }
    if (!price || price < 0) {
        result.error.price = true;
        result.valid = false;
    }
    return result;
}

export const validatePlateEdit = ({ name, price }) => {
    let result = {
        error: {},
        valid: true
    };
    if (name && name.trim().length === 0) {
        result.error.name = true;
        result.valid = false;
    }
    if (price && price < 0) {
        result.error.price = true;
        result.valid = false;
    }
    return result;
}

export const validateUserForm = ({ name, password }) => {
    let result = {
        error: {},
        valid: true,
    }
    if (!name || name.trim().length === 0) {
        result.error.name = "Nombre es requerido";
        result.valid = false;
    }
    if (!/^\S*$/.test(name)) {
        result.error.name = "Nombre no puede tener espacios";
        result.valid = false
    }
    if (!(/^[a-z0-9$&.-]+$/i.test(password))) {
        result.error.password = "Contraseña solo permite letras del alphabeto ingles, numeros y los simbolos '$&.-'"
        result.valid = false;
    }
    if (!password || password.trim().length === 0) {
        result.error.password = "Contraseña es requerida";
        result.valid = false;
    }
    if (password && password.length < 4) {
        result.error.password = "Contraseña debe tener al menos 4 caracteres"
        result.valid = false;
    }
    return result;
}