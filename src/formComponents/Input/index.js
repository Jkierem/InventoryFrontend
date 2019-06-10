import React from "react";
import styled from 'styled-components'
import { Input, Utils, Styled } from 'juanform'

const StyledComponent = styled(Styled.Defaults.Input)`
    border-radius: 0px;
    color: gray;
    font-family: Roboto;
    font-size: 1.4rem;
    padding: 5px;
    border: none;
    border-bottom: 1px solid darkgray;
    margin: 15px;
    transition: all 0.4s ease-in-out;
    &:focus {
        outline: none;
        border-bottom-color: blue;
    }
    &::placeholder {
        color: lightgray;
    }
`

export default Utils.createInput((props) => {
    return <Input as={StyledComponent} {...props}/>
});