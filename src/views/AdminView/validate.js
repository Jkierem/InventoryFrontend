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