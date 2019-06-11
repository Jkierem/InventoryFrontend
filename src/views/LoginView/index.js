import React from 'react';
import { createView } from '../../utils';
import { Form } from 'juanform';
import { Input, Button } from '../../formComponents';
import Container from '../../components/Container';

const LoginView = () => {
    return <Form as={Container} onSubmit={(state) => { console.log(state) }}>
        <Input type="text" placeholder="Usuario" name="user" />
        <Input type="password" placeholder="Contraseña" name="password" />
        <Button submit>Ingresar</Button>
    </Form>
}

export default createView(LoginView, 'login');