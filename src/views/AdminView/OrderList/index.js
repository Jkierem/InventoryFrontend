import React from 'react'
import { createAreaProps } from '../../../utils/Styles';
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import List , { Item , Action , Field } from '../../../components/List';
import { formatDate } from '../../../utils';

const createRow = ({table , createdAt , fullPrice} , key) => {
    return(
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
                    <Action fluid primary>Ver</Action>
                </React.Fragment>
            }
        />
    )
}

const OrderList = (props) => {
    return <GridArea {...createAreaProps(9,17,5,17)}>
        <Card title="Ordenes">
            <List>
            {props.orders.map(createRow)}
            </List>
        </Card>
    </GridArea>
}

export default OrderList