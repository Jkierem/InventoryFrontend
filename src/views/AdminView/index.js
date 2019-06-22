import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components'
import { JustOf, createAction, createEffect } from '../../utils';
import { Colors } from '../../utils/Styles';
import { Plate, Order } from '../../middleware';
import SideMenu from './SideMenu';
import OrderList from './OrderList';
import PlateList from './PlateList';

const ViewContainer = styled.div`
    display: flex;
    margin: 0px;
    padding: 20px;
    background-color: ${Colors.Panino}; 
    font-family: Roboto;
`

const ContentContainer = styled.main`
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    display: grid;
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(16, 1fr);
    grid-gap: 24px;
`

const PLATES = "PLATES"
const ORDERS = "ORDERS"

const initialState = {
    plates: [],
    orders: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case PLATES:
            return {
                ...state,
                plates: action.payload
            }
        case ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}

const getPlates = async (action) => {
    try {
        const plates = await Plate.getAllPlates();
        action(plates);
    } catch (e) {
        console.log(e)
    }
}

const getOrders = async (action) => {
    try {
        const orders = await Order.getOrders();
        action(orders)
    } catch (e) {
        console.log(e)
    }
}

const AdminView = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setPlates = createAction(PLATES, dispatch);
    const setOrders = createAction(ORDERS, dispatch)

    const fetchAndSetPlates = () => getPlates(setPlates);
    const fetchAndSetOrders = () => getOrders(setOrders);

    const createPlate = async ({ name, price }) => {
        try {
            await Plate.createPlate({ name, price })
            fetchAndSetPlates()
        } catch (e) {
            //TODO handle error
        }
    }

    const deletePlate = async ({ id }) => {
        try {
            await Plate.deletePlate(id);
            fetchAndSetPlates()
        } catch (e) {
            //TODO: handle error
        }
    }

    const editPlate = async (data) => {
        try {
            await Plate.updatePlate(data);
            fetchAndSetPlates()
        } catch (e) {
            //TODO: handle error
        }
    }

    useEffect(createEffect(
        fetchAndSetOrders,
        fetchAndSetPlates
    ), [])

    return <ViewContainer>
        <ContentContainer>
            <OrderList orders={state.orders} />
            <PlateList onEdit={editPlate} onDelete={deletePlate} plates={state.plates} />
            <SideMenu logout={props.logout} create={createPlate} />
        </ContentContainer>
    </ViewContainer>

}

AdminView.getName = JustOf("admin")

export default AdminView;