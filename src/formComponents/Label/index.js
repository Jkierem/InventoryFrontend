import React from 'react'
import { Utils, Label, Styled } from "juanform";

const StyledComponent = Styled.Label`
    font-family: Roboto;
    margin: 15px;
`

export default Utils.createLabel((props) => <Label as={StyledComponent} {...props} />);