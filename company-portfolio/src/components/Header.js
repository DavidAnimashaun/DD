/*import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>VersaWeb Design</h1>
      <nav>
        <ul>
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
*/
import React, { useState } from 'react';
import '../styles//Header.css'; 
import logo from '../images/logo192.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
              <li><a href="#webdevelopment">Web Development</a></li>
              <li><a href="#mobileappdevelopment">Mobile App Development</a></li>
              <li><a href="#ui/uxdesign">UI/UX Design</a></li>
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
/*
import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../images/logo192.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <a href="#services">Services</a> {/* Link to the "Services" section on the front page *//*}
            <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
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


import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../images/logo192.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Your Company Logo" className="logo" />
        <h1 className="company-name">VersaWeb Design</h1>
      </div>
      <nav className="nav-container">
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
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
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