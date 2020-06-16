import React from "react"

import Nav from 'react-bootstrap/Nav'
import NavbarRB from "react-bootstrap/Navbar"
import NavItem from "./NavItem.js"
import Container from "react-bootstrap/Container"

import './Navbar.css';

function Navbar() {
    return (
        <NavbarRB className="font-pf" collapseOnSelect variant="dark" bg="dark" expand="lg" fixed="top">
            <Container>
                <NavbarRB.Brand href="index.html">Martin Wong</NavbarRB.Brand>
                <NavbarRB.Toggle aria-controls="collapse-navbar" />
                <NavbarRB.Collapse id="collapse-navbar">
                    <Nav className="ml-auto">
                        <NavItem name="HOME" link="#section-home" />
                        <NavItem name="ABOUT" link="#section-about" />
                        <NavItem name="PROFILE" link="#section-profile" />
                        <NavItem name="PROJECT" link="#section-project" />
                        <NavItem name="CONTACT" link="#section-contact" />
                    </Nav>
                </NavbarRB.Collapse>
            </Container>
        </NavbarRB>
    )
}

export default Navbar