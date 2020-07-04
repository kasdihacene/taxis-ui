import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css';

function NavbarBoard(){
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/" >
                <span className="title-brand">Paris Taxi Fare</span>
            </Navbar.Brand>
        </Navbar>        
    );
}

export default NavbarBoard;