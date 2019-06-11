export const prop = name => object => object ? object[name] : undefined;
export const JustOf = (a) => () => a
export const isDefined = a => a !== undefined && a !== null
export const isNil = (value) => value == undefined || value == null;
export const keysOf = (obj) => Object.keys(obj);
export const strip = (obj) => {
    return keysOf(obj).reduce((acc, key) => {
        if (isDefined(obj[key])) {
            return {
                ...acc,
                [key]: obj[key],
            }
        } else {
            return acc;
        }
    }, {})
}

export const Either = (value) => {
    return {
        Or: (other) => isDefined(value) ? value : other
    }
}

export const createView = (component, name) => {
    component.getName = JustOf(name);
    return component
}

export const mapObject = (obj, funk) => Object.keys(obj).map((key, index) => funk(obj[key], index))

export const createPusher = (props) => (where) => props.history.push(where)

export const createAction = (type, dispatch) => {
    return (data) => {
        dispatch({
            type,
            payload: data,
        })
    }
}