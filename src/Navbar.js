import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

const navBar = (props) => (
    <>
        <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><h5>Nord MGA</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to='/' className="nav-link"><h5>Accueil</h5></NavLink>
                    <NavLink to='/localisation' className="nav-link"><h5>Localisation</h5></NavLink>
                    <NavLink to='/contact' className="nav-link"><h5>Contact</h5></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default navBar;
