import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const OrderTotal = (props) => {
    const { productName, city, phone, } = props.order

    return (
        <div>
            <Container>
                <Table striped bordered hover variant="info" className=" m-5">

                    <tbody>
                        <tr>
                            <td>{productName}</td>
                            <td>{city}</td>
                            <td>{phone}</td>
                            <td><Button variant="success">Shipping</Button> <Button variant="danger">Delete</Button></td>

                        </tr>

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default OrderTotal;