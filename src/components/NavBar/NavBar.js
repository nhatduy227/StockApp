import React from "react";
import { Container, Navbar, Nav} from 'react-bootstrap';

function Navibar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="favicon"
            src={process.env.PUBLIC_URL + '/favicon.ico'}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          InvestiGators</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stockpage">Stocks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
  );
}

export default Navibar;
