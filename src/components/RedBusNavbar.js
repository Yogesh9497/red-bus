import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import {FaUser} from "react-icons/fa";

function RedBusNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Image src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"/>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='ms-2'>Price Tickets</Nav.Link>
            
          </Nav>
          <Nav>

          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title={<FaUser style={{fontSize: 16}}/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In/ Sign Out</NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RedBusNavbar;