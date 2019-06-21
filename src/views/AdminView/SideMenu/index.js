import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'juanform';
import { Input, Button } from '../../../formComponents'
import { Colors, createAreaProps } from "../../../utils/Styles";
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import ErrorBanner from '../../../components/ErrorBanner';

const Logout = styled.div`
    font-family: inherit;
    font-size: 1.25rem;
    position: absolute;
    padding: 16px;
    bottom: 0px;
    background-color: ${Colors.Red};
    width: 100%;
    line-height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    box-sizing: border-box;
`

const Container = styled.form`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 24px;
    flex-direction: column;
`

const validate = ({ name, price }) => {
    let result = {
        error: {},
        valid: true
    };
    if (!name || name.trim().length == 0) {
        result.error.name = true;
        result.valid = false;
    }
    if (!price || price < 0) {
        result.error.price = true;
        result.valid = false;
    }
    return result;
}

const cleanData = ({ name, price }) => ({
    name: name.trim(),
    price: Math.round(price)
})

const SideMenu = (props) => {
    const [error, setError] = useState({
        name: false,
        price: false,
    })

    const resetError = () => setError({
        name: false,
        price: false,
    })

    const onSubmit = (data) => {
        const validation = validate(data)
        if (validation.valid) {
            props.create(cleanData(data))
        } else {
            setError(validation.error)
        }
    }

    return (
        <GridArea {...createAreaProps(1, 17, 1, 5)}>
            <Card title="Crear">
                <Form
                    as={Container}
                    onSubmit={onSubmit}
                    onChange={resetError}
                >
                    <Input
                        fluid
                        id="nombre"
                        name="name"
                        label="Nombre"
                    />
                    <ErrorBanner visible={error.name}>
                        Name must not be empty
                    </ErrorBanner>
                    <Input fluid
                        id="precio"
                        name="price"
                        label="Precio"
                        type="number" min='0'
                        step='500'
                    />
                    <ErrorBanner visible={error.price}>
                        Precio debe ser positivo
                    </ErrorBanner>
                    <Button primary fluid submit>Crear Plato</Button>
                </Form>
                <Logout onClick={props.logout}>Salir</Logout>
            </Card>
        </GridArea>)
}

export default SideMenu