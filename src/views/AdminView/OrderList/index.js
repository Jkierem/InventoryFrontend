import React from 'react'
import styled from 'styled-components'
import { createAreaProps } from '../../../utils/Styles';
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import { Button } from '../../../formComponents';
import List from '../../../components/List';

const ItemAction = styled(Button)`
    margin: 0px 4px;
    font-size: 1rem;
    padding: 4px 8px;
`

const Field = styled.div`
    width: 50%;
`

const createRow = ({name} , key) => {
    return(
        <List.Item
            key={key}
            content={
                <React.Fragment>
                    <Field>{name}</Field>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <ItemAction primary>Ver</ItemAction>
                </React.Fragment>
            }
        />
    )
}

const OrderList = (props) => {
    return <GridArea {...createAreaProps(9,17,5,17)}>
        <Card title="Ordenes">
            {props.orders.map(createRow)}
        </Card>
    </GridArea>
}

export default OrderList