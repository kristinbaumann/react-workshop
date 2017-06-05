import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to='/'>
      <h1>MyConference App</h1>
    </Link>
  </div>
);

export default Header;
