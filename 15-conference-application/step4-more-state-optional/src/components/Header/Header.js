import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import star from '../../img/star.png';

const Header = () => (
  <div className="header">
    <Link to='/'><h1>MyConference App</h1></Link>
    <Link to='/favourites'><img src={star} className="favouritesIcon" alt="Talk Favourites" /></Link>
  </div>
);

export default Header;
