import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'juanform';
import { Input, Button } from '../../../formComponents'
import { Colors, createAreaProps } from "../../../utils/Styles";
import { Card, GridArea, ErrorBanner, Modal } from '../../../components'
import { validatePlateForm as validate } from '../validate'
import UserForm from './UserForm';

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

const cleanData = ({ name, price }) => ({
    name: name.trim(),
    price: Math.round(price)
})

const SideMenu = (props) => {
    const [open, setOpen] = useState(false);
    const toggleCreateUser = () => setOpen(!open);
    const handleClickOpenCreateModal = (e) => {
        e.preventDefault()
        toggleCreateUser();
    }

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
            props.createPlate(cleanData(data))
        } else {
            setError(validation.error)
        }
    }

    const handleUserCreate = (data) => {
        toggleCreateUser()
        props.createUser(data)
    }

    return (
        <React.Fragment>
            <Modal
                title="Crear usuario"
                open={open}
                onClickOutside={toggleCreateUser}
                height={"70%"}
                content={
                    <UserForm
                        onSubmit={handleUserCreate}
                        onCancel={toggleCreateUser}
                    />
                }
            />
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
                            Nombre es requerido
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
                        <Button secondary fluid onClick={handleClickOpenCreateModal}>Crear Usuario</Button>
                    </Form>
                    <Logout onClick={props.logout}>Salir</Logout>
                </Card>
            </GridArea>
        </React.Fragment>)
}

export default SideMenu