import React from 'react';
import styled from 'styled-components'
import { Form, Styled } from 'juanform';
import { createView } from '../../utils';
import { Input, Button } from '../../formComponents';
import Container from '../../components/Container';
import ErrorBanner from '../../components/ErrorBanner';
import Modal from '../../components/Modal';
import { Depth, Colors } from '../../utils/Styles';

const StyledForm = Styled.Form`
    display: flex;
    padding: 40px;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    min-width: 280px;
    min-height: 40vh;
    max-height: 60vh;
    box-shadow: ${Depth(3)};
    border-radius: 25px;
    flex-direction: column;
    background-color: white;
    @media(min-width:768px) {
        min-width: 75vw
    }
    @media(min-width: 1000px){
        min-width: 500px
    }
`

const Image = styled.img`
    min-height: 128px;
    max-height: 128px;
    width: auto;
    margin: 16px;
`

const LoginView = (props) => {
    const onLogin = (state) => {
        if (state.name) {
            state.name = state.name.trim();
        }
        props.login(state)
    }

    return (
        <Container color={Colors.Panino}>
            <Form
                as={StyledForm}
                onSubmit={onLogin}
                onChange={props.resetError}
            >
                <Image src={"./panino64x64.svg"}></Image>
                <Input type="text" label="Usuario" name="name" id="name" />
                <Input type="password" label="Contraseña" name="password" id="password" />
                <ErrorBanner visible={props.error}>Wrong user or password</ErrorBanner>
                <Button primary submit>Ingresar</Button>
            </Form>
        </Container>
    )
}

export default createView(LoginView, 'login');