//////////////MULTI-PAGE APPLICATION CODE //////////////////
/*
import React, { useState } from 'react';

import '../styles/Header.css';
import logo from '../images/logo192.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateToPage = (page) => {
    // Use window.location.href to navigate to the selected page.
    window.location.href = `/${page}`;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Your Company Logo" className="logo" />
        <h1 className="company-name">VersaWeb Design</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li
            className={`dropdown ${isDropdownOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#services">Services</a>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li>
                <a href="/Web-Development" onClick={() => navigateToPage('Web-Development')}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="/Mobile-App-Development" onClick={() => navigateToPage('Mobile-App-Development')}>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/UI-UX-Design" onClick={() => navigateToPage('UI-UX-Design')}>
                  UI/UX Design
                </a>
              </li>
            </ul>
          </li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
*/



import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo192.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Your Company Logo" className="logo" />
        <h1 className="company-name">VersaWeb Design</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;