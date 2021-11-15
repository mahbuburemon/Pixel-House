import React, { useState } from 'react';

import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);


        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="shadow-sm text-black mt-3 p-2 text-center rounded">Please Login</h1>
                {user?.email && <Alert variant='info'>
                    login successfully
                </Alert>}
                {
                    authError && <Alert variant='danger'>{authError}</Alert>
                }
                <Row className="mt-3">
                    <Col lg={5} md={6} sm={12} className="p-3 m-auto text-start shadow-sm rounded-lg">
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="Enter email"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>

                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                    required />
                            </Form.Group>
                            <br />
                            <div className="d-grid">
                                <Button variant="info btn btn-block" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                        {
                            isLoading && <Spinner animation="border" variant="info" />

                        }

                    </Col>
                    <div className="text-center">......................or................</div>
                    <div className=" g-2 p-2 m-2">

                        <button type="button" className="btn btn-info m-2">Google Signin</button>
                        <p>new user?please <Link className="text-primary" to="/register">register</Link> </p>
                    </div>
                </Row>

            </Container>

            <Footer></Footer>
        </>
    );
};

export default Login;