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

const createListItem = ({ name , price , id },key) => {
    return(
        <List.Item
            key={key}
            content={
                <React.Fragment>
                    <Field>{name}</Field>
                    <Field>${price}</Field>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <ItemAction primary>Editar</ItemAction>
                    <ItemAction negative>Borrar</ItemAction>
                </React.Fragment>
            }
        />
    )
}

const PlateList = (props) => {
    return <GridArea {...createAreaProps(1,9,5,17)}>
        <Card title="Platos"> 
            <List>
                {props.plates.map(createListItem)}
            </List>
        </Card>
    </GridArea>
}

export default PlateList