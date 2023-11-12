// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationMenu() {
  return (
    <>     
      <Navbar className="navbar navbar-light" style={{backgroundColor:"lightsteelblue", fontSize:"17px", color:"black",lineHeight:"45px"}}>
        <Container>
          <Navbar.Brand href="" style={{fontSize:"25px", color:"DarkOrange"}}>Welcome Muthu Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color:"black"}} href='/Customers'>Customers</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/Products">Products</Nav.Link>
            <Nav.Link style={{color:"black"}} href='/Stores'>Store</Nav.Link>
            {/* <Nav.Link style={{color:"black"}} href='/Sales'>Sales</Nav.Link>            */}
          </Nav>
        </Container>
      </Navbar>
      <br/>
     
    </>
  );
}

export default NavigationMenu;