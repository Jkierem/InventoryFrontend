import styled from 'styled-components'

export const Colors = {
    Panino: "#F7DDAC",
    Blue: "#3768b7",
    DarkBlue: "#2d5699",
    Ocre: "#f9f1e0",
    LightBrown: "#f2c671",
    Brown: "#AC8C4F",
    DarkBrown: "#8c7140",
    Red: "#bc1a1a",
    DarkRed: "#9b1717",
    LightGray: "#f5f5f5",
    MiddleGray: "#e5e5e5",
    Gray: "rgba(0,0,0,.6)",
    White: "white",
    Black: "#101010"
}

const Levels = {
    0: "none",
    1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

export const Depth = (depth) => Levels[depth]
export const createSection = (left, right , top , bottom) => styled.section`
    grid-row: ${left} / ${right} ;
    grid-column: ${top} / ${bottom};
`

export const createAreaProps = (rowStart,rowEnd,colStart,colEnd) => ({
    rowStart,
    rowEnd,
    colStart,
    colEnd,
})