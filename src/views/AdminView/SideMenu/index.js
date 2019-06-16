import React from 'react';
import styled from 'styled-components';
import { Form } from 'juanform';
import { Input, Button } from '../../../formComponents'
import { Colors, createAreaProps } from "../../../utils/Styles";
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';

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

const SideMenu = (props) => {
    return (
    <GridArea {...createAreaProps(1,17,1,5)}>
        <Card title="Crear">
            <Form as={Container} onSubmit={props.create}>
                <Input fluid id="nombre" name="name" label="Nombre"/>
                <Input fluid id="precio" name="price" label="Precio" type="number"/>
                <Button primary fluid submit>Crear Plato</Button>
            </Form>
            <Logout onClick={props.logout}>Salir</Logout>
        </Card>
    </GridArea>)
}

export default SideMenu