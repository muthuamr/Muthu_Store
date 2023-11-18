// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Menu } from 'semantic-ui-react'

function NavigationMenu() {
  return (
    <>     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="" style={{fontSize:"16px", color:"white"}}><p>Welcome to <strong>Muthu Store</strong></p></Navbar.Brand>
          <div class="ui menu">
          <Nav className="me-auto" style={{fontSize:"16px"}}>
            <Nav.Link style={{color:"black"}} href='/Customers'>Customers</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/Products">Products</Nav.Link>
            <Nav.Link style={{color:"black"}} href='/Stores'>Stores</Nav.Link>
            <Nav.Link style={{color:"black"}} href='/Sales'>Sales</Nav.Link>
          </Nav>
        
          </div>

        </Container>
      </Navbar>
      <br/>
     
    </>
  );
}

export default NavigationMenu;