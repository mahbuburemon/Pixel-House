import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Form, ListGroup, Row } from 'react-bootstrap';
import useAuth from '../../../../../hooks/useAuth';
import SingleAdmin from '../SingleAdmin/SingleAdmin';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState([]);

    const { user } = useAuth

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://fathomless-atoll-20854.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true)

                }
            })
        e.prevenDefault()
    }
    useEffect(() => {
        fetch(`https://fathomless-atoll-20854.herokuapp.com/users/admin`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <>
            <Container>
                <Row className="m-5">
                    <h1>Make Admin </h1>
                    <form className="p-5 m-5 " onSubmit={handleAdminSubmit} style={{ display: 'flex' }} >
                        <Form.Group style={{ width: '300px' }} controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Enter email"
                                required />
                        </Form.Group>
                        <Button variant="info" type="submit">Make Admin</Button>


                    </form>
                    {success && <Alert variant='info'>
                        Made Admin successfully
                    </Alert>}
                </Row>
                <Row>
                    <h1>List of Admin</h1>

                    {
                        admin.map(singleAdmin => <SingleAdmin
                            key={singleAdmin}
                            singleAdmin={singleAdmin}

                        ></SingleAdmin>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default MakeAdmin;