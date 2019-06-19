import { getOrdersPath , createOrderPath } from './constants'
import { strip } from '../../utils';

const Order = {
    getOrders: () => {
        return fetch(getOrdersPath())
                .then(x => x.json())
                .then( x => {
                    console.log(x)
                    if( x.status === 200 ){
                        return x.orders;
                    } else {
                        throw x
                    }
                })
    },
    createOrder: ({ table , notes , items }) => {
        return fetch(createOrderPath(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(strip({ table, notes, items }))
        })
        .then( x => x.json() )
        .then( x => {
            if (x.status === 200) {
                return x.order;
            } else {
                throw x;
            }
        })
    }
}

export default Order;