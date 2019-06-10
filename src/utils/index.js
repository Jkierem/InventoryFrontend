export const prop = name => object => object ? object[name] : undefined;
export const JustOf = (a) => () => a
export const isDefined = a => a !== undefined && a !== null
export const Either = (value) => {
    return {
        Or: (other) => isDefined(value) ? value : other
    }
}
