import React from 'react'
import { createAreaProps } from '../../../utils/Styles';
import Card from '../../../components/Card';
import GridArea from '../../../components/GridArea';
import List , { Item , Action, Field } from '../../../components/List';

const createListItem = ({ name , price , id },key) => {
    return(
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
                    <Action primary>Editar</Action>
                    <Action negative>Borrar</Action>
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