import React from 'react';
import { JustOf } from '../../utils';
import styled from 'styled-components';
import { Form } from 'juanform';
import { Input, Button } from '../../formComponents';

const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const LoginView = (props) => {
    return <Form as={Container} onSubmit={(state) => { console.log(state) }}>
        <Input type="text" placeholder="Usuario" name="user" />
        <Input type="password" placeholder="Contraseña" name="password" />
        <Button submit>Ingresar</Button>
    </Form>
}


LoginView.getName = JustOf('login')

export default LoginView;