import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" className="px-4">
      <NavbarBrand tag={Link} to="/">
        Logo
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            Profile
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
