import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <div className="nav-brand">
        <NavLink to="/" className="brand-link">
          <span className="brand-logo">Logo</span>
        </NavLink>
        <span className="brand-badge">FER202</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Users (Ex 21.1)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dishes"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Dishes (Ex 21.2)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
