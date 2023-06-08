import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <h1>Bookstore CMS</h1>
    </div>
    <div className="navbar-links">
      <ul>
        <li className="nav-link">
          <NavLink className="nav-item" to="/books">BOOKS</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="nav-item" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
