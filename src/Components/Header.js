import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
 
function Header() {
    return (
        <div className='Header'>
           <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">GDSC-DTC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Aim">Aim</Nav.Link>
        <Nav.Link href="#AboutUs">About Us</Nav.Link>
        <Nav.Link href="#OurTeam">Our Team</Nav.Link>
        <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div> 
        </div>
    )
   
}

export default Header
