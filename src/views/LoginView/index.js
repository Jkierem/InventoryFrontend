import React from 'react';
import { Form } from 'juanform';
import { createView } from '../../utils';
import { Input, Button } from '../../formComponents';
import Container from '../../components/Container';
import ErrorBanner from '../../components/ErrorBanner';

const LoginView = (props) => {
    return <Form
        as={Container}
        onSubmit={(state) => props.login(state)}
        onChange={props.resetError}
    >
        <Input type="text" placeholder="Usuario" name="name" />
        <Input type="password" placeholder="Contraseña" name="password" />
        <ErrorBanner visible={props.state.error}>Wrong user or password</ErrorBanner>
        <Button submit>Ingresar</Button>
    </Form>
}

export default createView(LoginView, 'login');