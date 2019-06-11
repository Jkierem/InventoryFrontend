import React from 'react'
import { Utils, Button, Styled } from "juanform";

const StyledComponent = Styled.Button`
    font-family: Roboto;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
    margin: 15px;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: #3768b7;
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    cursor: pointer;
    &:hover {
        background: #2d5699;
    }
`

export default Utils.createButton((props) => <Button as={StyledComponent} {...props} />)