import React from 'react'
import { Utils, Styled } from "juanform";
import { Colors, Depth } from '../../utils/Styles';

const pickIdleColor = (props) => {
    if (props.primary) {
        return Colors.Brown
    } else if (props.negative) {
        return Colors.Red
    }
}

const pickFocusColor = (props) => {
    if (props.primary) {
        return Colors.DarkBrown
    } else if (props.negative) {
        return Colors.DarkRed
    }
}

const StyledComponent = Styled.Button`
    font-family: Roboto;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
    margin: 24px;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: ${pickIdleColor};
    color: white;
    box-sizing: border-box;
    width: ${ props => props.fluid ? '100%' : 'initial'} ;
    box-shadow: ${Depth(2)};
    cursor: pointer;
    &:hover {
        background: ${pickFocusColor};
        box-shadow: ${Depth(1)}
    }
`

export default Utils.createButton((props) => <StyledComponent {...props} />)