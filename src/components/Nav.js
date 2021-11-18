/* eslint-disable react/prop-types */

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';

function Nav(props) {
  function titleCase(string) {
    return string.substring(1).charAt(0).toUpperCase() + string.slice(2).toLowerCase();
  }

  const { sendData } = props;

  return (
    <Navbar className="nav-bg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            {useLocation().pathname === '/' ? (
              <AiOutlineHome />
            ) : (
              <IoChevronBack />
            )}
          </NavLink>
        </Navbar.Brand>
      </Container>
      <Container fluid>
        <Navbar.Text className="fs-3">
          {useLocation().pathname === '/' ? (
            'Home'
          ) : (
            titleCase(useLocation().pathname)
          )}
        </Navbar.Text>
      </Container>
      {useLocation().pathname === '/' ? (
        <input onChange={(e) => { sendData(e.target.value); }} type="text" name="search" id="search" placeholder="Search" />
      ) : (
        <input className="placeholder" />
      )}
    </Navbar>
  );
}

export default Nav;
