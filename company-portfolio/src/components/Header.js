

import React from 'react';
import '../styles/Header.css';
import logo from '../images/uselogo.png';

const Header = () => {
  return (
    <header className="header">
      <div class="page-container">
      <div className="logo-container">
        <img src={logo} alt="Your Company Logo" className="logo" />
        <h1 className="company-name">VersaWeb Design</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="wavy-border"></div>
      </div>
    </header>
  );
}

export default Header;