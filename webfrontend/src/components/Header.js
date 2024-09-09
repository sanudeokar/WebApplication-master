import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/data">View Data</Link></li>
          <li><Link to="/add">Add Data</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;