import React from 'react';
import { NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">Courses</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
