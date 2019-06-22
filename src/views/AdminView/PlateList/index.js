import React, { useState } from 'react'
import styled from 'styled-components'
import { createAreaProps } from '../../../utils/Styles';
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import Modal from '../../../components/Modal';
import List, { Item, Action, Field } from '../../../components/List';
import { Input, Button } from '../../../formComponents';
import { Form } from 'juanform';
import { validatePlateEdit } from '../validate';
import ErrorBanner from '../../../components/ErrorBanner';

const createListItem = ({ onEdit, onDelete }) => ({ name, price, _id: id }, key) => {
    return (
        <Item
            key={key}
            content={
                <React.Fragment>
                    <Field>{name}</Field>
                    <Field>${price}</Field>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <Action id={id} name={name} price={price} primary onClick={onEdit}>Editar</Action>
                    <Action id={id} name={name} price={price} negative onClick={onDelete}>Borrar</Action>
                </React.Fragment>
            }
        />
    )
}

const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.7rem;
`

const ModalActionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`

const Row = styled.p`
    margin: 16px 0px ;
`

const HorizontalFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DeleteModalContent = (props) => {
    const { onConfirm, onCancel, data, closeModal } = props;
    const handleConfirm = () => {
        onConfirm(data);
        closeModal();
    }
    return (
        <ModalContent>
            <Row>Estas seguro de borrar este plato?</Row>
            <Row>{data.name}</Row>
            <ModalActionContainer>
                <Action padding='8px 16px' negative onClick={handleConfirm}>Borrar</Action>
                <Action padding='8px 16px' primary onClick={onCancel}>Cancelar</Action>
            </ModalActionContainer>
        </ModalContent>
    )
}

const cleanData = (data) => {
    const result = {}
    if (data.name) {
        result.name = data.name.trim()
    }
    if (data.price) {
        result.price = Math.round(data.price)
    }
    return result
}

const EditModalContent = (props) => {
    const { onConfirm, onCancel, data, closeModal } = props;
    const [error, setError] = useState({ name: false, price: false });
    const handleConfirm = (newData) => {
        const validation = validatePlateEdit(newData)
        if (validation.valid) {
            onConfirm({
                ...cleanData(newData),
                id: data.id,
            });
            closeModal();
        } else {
            setError(validation.error);
        }
    }

    return <ModalContent>
        <Form as={FormContainer} onSubmit={handleConfirm}>
            <Input name="name" type="text" label="Nombre" defaultValue={data.name} />
            <ErrorBanner visible={error.name}>
                Nombre es requerido
            </ErrorBanner>
            <Input name="price" type="number" label="Precio" defaultValue={data.price} />
            <ErrorBanner visible={error.price}>
                Precio debe ser positivo
            </ErrorBanner>
            <Field as={HorizontalFlex}>
                <Button primary submit>Actualizar</Button>
                <Button negative onClick={onCancel}>Cancelar</Button>
            </Field>
        </Form>
    </ModalContent>

}

const PlateList = (props) => {
    const [modals, setModals] = useState({
        deleteModal: false,
        editModal: false,
        selecetedPlate: {},
    })

    const closeDelete = () => setModals({ deleteModal: false, selecetedPlate: {} })
    const closeEdit = () => setModals({ editModal: false, selecetedPlate: {} })

    const rowActionProps = {
        onEdit: (e, info) => setModals({ editModal: true, selecetedPlate: info }),
        onDelete: (e, info) => setModals({ deleteModal: true, selecetedPlate: info })
    }

    const DeleteModalProps = {
        onConfirm: props.onDelete,
        onCancel: closeDelete,
        data: modals.selecetedPlate,
        closeModal: closeDelete,
    }

    const EditModalProps = {
        ...DeleteModalProps,
        onConfirm: props.onEdit,
    }

    return (
        <React.Fragment>
            <Modal
                title={'Confirmacion de Borrado'}
                open={modals.deleteModal}
                onClickOutside={closeDelete}
                content={<DeleteModalContent {...DeleteModalProps} />}
                height={'50%'}
            />
            <Modal
                title={'Editar Plato'}
                open={modals.editModal}
                onClickOutside={closeEdit}
                content={<EditModalContent {...EditModalProps} />}
                height={'70%'}
            />
            <GridArea {...createAreaProps(1, 9, 5, 17)}>
                <Card title="Platos">
                    <List>
                        {props.plates.map(createListItem(rowActionProps))}
                    </List>
                </Card>
            </GridArea>
        </React.Fragment>
    )
}

export default PlateList