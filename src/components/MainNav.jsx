import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../assets/images/her (1) 1.png";
import Helper from "../utility/Helper.jsx";
import LoginModal from "./LoginModal.jsx";
import toast from "react-hot-toast";




const MainNav = () => {

    const Logout = () => {
        Helper.logout();
        toast.success("Your logout successfully");
    }

    return (
        <Navbar expand="lg" className="bg-dark py-3">
            <Container >
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="text-white nav-link" to="/">Home</NavLink>
                        <NavLink className="text-white nav-link" to="/about-us">About Us</NavLink>
                        <NavLink className="text-white nav-link" to="/contact">Contact</NavLink>
                        { Helper.isLogin() && <NavLink className="text-white nav-link" to="/cart">Cart</NavLink> }
                    </Nav>
                    <div className="d-flex">
                        { !Helper.isLogin() && <LoginModal/> }
                        { Helper.isLogin() && <Button variant="outline-primary" onClick={Logout} className="text-white">Logout</Button>}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;