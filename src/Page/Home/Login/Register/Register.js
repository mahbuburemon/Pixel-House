import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();


    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="shadow-sm text-info mt-3 p-2 text-center rounded">Registation</h1>

                {user?.email && <Alert variant='info'>
                    User create successfully
                </Alert>}
                {
                    authError && <Alert variant='danger'>{authError}</Alert>
                }
                <Row className="mt-4">
                    <Col lg={5} md={6} sm={12} className="p-3 m-auto text-start shadow-sm rounded-lg">

                        {!isLoading && <Form onSubmit={handleLoginSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter Name"
                                    required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="Enter email"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>

                                <Form.Control
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Password"
                                    required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword ">
                                <Form.Label>confirm Password</Form.Label>

                                <Form.Control
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    placeholder="re-enter Password"
                                    required />
                            </Form.Group>
                            <br />
                            <div className="d-grid">
                                <Button variant="info btn btn-block" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>}
                        {
                            isLoading && <Spinner animation="border" variant="info" />

                        }


                    </Col>
                    <div className="text-center">......................or................</div>
                    <div className=" g-2 p-2 m-2">

                        <button type="button" className="btn btn-danger m-2">  Google Signin</button>
                        <p>Already have an acount? <Link className="text-primary" to="/login">Please login</Link> </p>
                    </div>
                </Row>
            </Container>
            <Footer></Footer>

        </>
    );
};

export default Register;