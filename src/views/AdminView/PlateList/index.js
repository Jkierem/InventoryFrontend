import React, { useState } from 'react'
import styled from 'styled-components'
import { createAreaProps } from '../../../utils/Styles';
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import Modal from '../../../components/Modal';
import List, { Item, Action, Field } from '../../../components/List';
import { pick } from '../../../utils';

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
                    <Action id={id} name={name} primary onClick={onEdit}>Editar</Action>
                    <Action id={id} name={name} negative onClick={onDelete}>Borrar</Action>
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
    justify-content: flex-start;
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

const PlateList = (props) => {
    const [modals, setModals] = useState({
        deleteModal: false,
        editModal: false,
        selecetedPlate: {},
    })

    const modalProps = pick(['onEdit', 'onDelete'], props);
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

    return (
        <React.Fragment>
            <Modal
                title={'Confirmacion de Borrado'}
                open={modals.deleteModal}
                onClickOutside={closeDelete}
                content={<DeleteModalContent {...DeleteModalProps} />}
            />
            <Modal
                title={'Editar Plato'}
                open={modals.editModal}
                onClickOutside={closeEdit}
                content={<DeleteModalContent {...DeleteModalProps} />}
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