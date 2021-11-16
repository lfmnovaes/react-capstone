import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoChevronBack } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

function Nav() {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            {useLocation().pathname === '/' ? (
              <GiHamburgerMenu />
            ) : (
              <IoChevronBack />
            )}
          </NavLink>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
