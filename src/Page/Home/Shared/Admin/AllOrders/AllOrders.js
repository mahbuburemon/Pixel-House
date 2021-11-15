import React, { useEffect, useState } from 'react';
import OrderTotal from '../OrderTotal/OrderTotal';

const AllOrders = () => {

    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [])

    return (
        <div>
            <h2>Total Order :{orderDetails.length}</h2>

            {/* <h2>manage all{user.email}</h2>
        <h2>manage all{user.displayName}</h2> */}

            {
                orderDetails.map(order => <OrderTotal
                    key={order._id}
                    order={order}
                ></OrderTotal>)
            }


        </div>
    );
};

export default AllOrders;