import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="head">
      <h1>Bookstore CMS</h1>
      <ul className="links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </>
);

export default Navbar;
