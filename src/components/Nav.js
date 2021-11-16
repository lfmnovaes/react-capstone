import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => (
  <Navbar expand="sm" bg="light">
    <Container fluid>
      <Navbar.Brand>
        Crypto
      </Navbar.Brand>
      <NavLink to="/" className="nav-link">Back</NavLink>
    </Container>
  </Navbar>
);

export default Nav;
