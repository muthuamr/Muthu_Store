import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomerTable from './customer/CustomerTable';

function NavBar(props) {
    return (
        <>
          <Navbar bg="navbar navbar-dark bg-dark" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#">Muthu Store</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Customers" onClick={()=>alert("welcome")}>Customers</Nav.Link>
                <Nav.Link href="#Products">Products</Nav.Link>
                <Nav.Link href="#Stores">Stores</Nav.Link>
                <Nav.Link href="#Sales">Sales</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />          
        </>
      );
}

export default NavBar;