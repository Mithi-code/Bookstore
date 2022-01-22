import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="head">
      <h1>Bookstore CMS</h1>
      <ul className="links">
        <li><Link to="/" className="active">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      </svg>
    </nav>
  </>
);

export default Navbar;
