import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { admin, user, logout } = useAuth()
    return (
        <>
            <Navbar bg="info" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Brand href="/home" className="text-white fs-2 fw-bold"> Pixel House</Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/products">Products</Nav.Link>
                        {admin && <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/admin">Admin</Nav.Link>}

                        {!admin && <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/dashboard">Dashboard</Nav.Link>}

                        {
                            user?.email ?
                                <Button onClick={logout} variant="light">LouOut</Button>
                                :
                                <Nav.Link as={Link} className=" text-black fs-5 fw-bold" to="/login">Log in</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in : <a href="#login" className=" p-2">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;