import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../../../hooks/useAuth';
import Header from '../../Header/Header';
import AddProducts from '../AddProducts/AddProducts';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Footer from '../../Footer/Footer'


const Admin = () => {

    let { path, url } = useRouteMatch();
    const { admin, } = useAuth()


    return (
        <>
            <div>
                <Header></Header>
            </div>
            <Navbar bg="dark" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Collapse className="justify-content-start">

                        {admin && <Nav.Link as={Link} className=" text-white  fw-bold" to={`${url}/allorders`}>All Orders</Nav.Link>}
                        {admin && <Nav.Link as={Link} className=" text-white  fw-bold" to={`${url}/addproducts`}>Add Products</Nav.Link>}
                        {admin && <Nav.Link as={Link} className=" text-white  fw-bold" to={`${url}/makeadmin`}>Make Admin</Nav.Link>}
                        {/* <Nav.Link as={Link} className=" text-black  fw-bold" to={`${url}`}>LogOut</Nav.Link> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <AddProducts></AddProducts>
                </Route>
                <Route path={`${path}/addproducts`}>
                    <AddProducts></AddProducts>
                </Route>
                <Route path={`${path}/allorders`}>
                    <AllOrders></AllOrders>
                </Route>
                <Route path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>

            <Footer></Footer>

        </>
    );
};

export default Admin;