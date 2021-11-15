import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';

const Orders = (props) => {
    const { productName, city, phone, } = props.order

    return (
        <Table striped bordered hover variant="dark">

            <tbody>
                <tr>
                    <td>{productName}</td>
                    <td>{city}</td>
                    <td>{phone}</td>
                    <td><Button variant="info">pandding</Button> <Button variant="danger">Delete</Button></td>

                </tr>

            </tbody>
        </Table>
    );
};

export default Orders;