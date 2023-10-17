import React from 'react';
import '../styles/Footer.css'; // Adjust the path to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={process.env.PUBLIC_URL + ' /logo512.png'} alt="Your Logo" />
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <a href="#about"><h3>About</h3></a>
            <p>Learn more about our company.</p>
        </div>
        <div className="footer-column">
          <a href="#services"><h3>Services</h3></a>
          <p>Explore the range of services we offer.</p>
        </div>
        <div className="footer-column">
          <a href="#portfolio"> <h3>Portfolio</h3></a>
          <p>View our latest projects.</p>
        </div>
        <div className="footer-column">
          <a href="#contact"><h3>Contact</h3></a>
          <p>Get in touch with us.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
