import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';

const Orders = (props) => {
    const { _id, productName, city, phone, } = props.order

    const handleDelete = id => {
        const url = `https://fathomless-atoll-20854.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <Table striped bordered hover variant="dark">

            <tbody>
                <tr>
                    <td>{productName}</td>
                    <td>{city}</td>
                    <td>{phone}</td>
                    <td><Button variant="info">pandding</Button>
                        <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button></td>

                </tr>

            </tbody>
        </Table>
    );
};

export default Orders;