import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <img className="image" src="logo.svg" />
            <Navbar.Brand href="/">S.A.</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Homes</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
