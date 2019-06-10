import React from 'react'
import { Utils, Button, Styled } from "juanform";
import styled from 'styled-components'

const StyledComponent = Styled.Button`
    font-family: Roboto;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 15px;
    border-radius: 7px;
    outline: none;
`

export default Utils.createButton((props) => <Button as={StyledComponent} {...props} />)