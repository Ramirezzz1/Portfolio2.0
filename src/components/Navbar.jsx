import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import pic from '../assests/pic.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand href="#home"><img src={pic} alt="logo" id="logo" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default Navbar
