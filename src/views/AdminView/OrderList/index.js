import React, { useState } from 'react'
import styled from 'styled-components'
import { createAreaProps } from '../../../utils/Styles';
import { Card, GridArea, Modal } from '../../../components';
import List, { Item, Action, Field } from '../../../components/List';
import { formatDate } from '../../../utils';

const createRow = (onClick) => (order, key) => {
    const { table, createdAt, fullPrice } = order;
    const handleClick = () => onClick(order);
    return (
        <Item
            key={key}
            contentWidth={"80%"}
            actionsWidth={"20%"}
            content={
                <React.Fragment>
                    <Field width="30%" >Mesa {table}</Field>
                    <Field width="35%">${fullPrice}</Field>
                    <Field width="35%">{formatDate(createdAt)}</Field>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <Action fluid primary onClick={handleClick}>Ver</Action>
                </React.Fragment>
            }
        />
    )
}

const ModalFooterClose = styled(Action)`
    margin-left: auto;
`

const ModalFooter = ({ onClick }) => {
    return <ModalFooterClose negative onClick={onClick} >Cerrar</ModalFooterClose>
}

const ModalContent = ({ order }) => {
    return <React.Fragment>
        <List>
            {order.items.map(
                ({ name, quantity, unitaryPrice }, key) =>
                    <Item
                        key={key}
                        contentWidth={"100%"}
                        content={
                            <React.Fragment>
                                <Field width={"40%"}>{name}</Field>
                                <Field width={"10%"}>{quantity}</Field>
                                <Field width={"10%"}>X</Field>
                                <Field width={"10%"}>{unitaryPrice}</Field>
                                <Field width={"10%"} flex={"center"}>=</Field>
                                <Field width={"10%"}>{quantity * unitaryPrice}</Field>
                            </React.Fragment>
                        }
                    />
            )}
        </List>
    </React.Fragment>
}

const OrderList = (props) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({});

    const toggleOpen = () => setOpen(!open);

    const onListClick = (order) => {
        setSelected(order)
        toggleOpen();
    }

    return (
        <React.Fragment>
            <Modal
                title={`Anotaciones: ${selected.notes}`}
                open={open}
                onClickOutside={toggleOpen}
                height={'70%'}
                content={<ModalContent order={selected} />}
                footer={<ModalFooter onClick={toggleOpen} />}
            />
            <GridArea {...createAreaProps(9, 17, 5, 17)}>
                <Card title="Ordenes">
                    <List>
                        {props.orders.map(createRow(onListClick))}
                    </List>
                </Card>
            </GridArea>
        </React.Fragment>)
}

export default OrderList