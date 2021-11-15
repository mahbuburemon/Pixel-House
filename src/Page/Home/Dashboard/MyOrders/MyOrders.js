import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const { user } = useAuth();
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [])
    return (
        <div>
            <h2>you have Ordered :{orderDetails.length}</h2>

            {/* <h2>manage all{user.email}</h2>
            <h2>manage all{user.displayName}</h2> */}

            {
                orderDetails.map(order => <Orders
                    key={order._id}
                    order={order}
                ></Orders>)
            }


        </div>
    );
};

export default MyOrders;