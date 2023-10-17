import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    /*
    <section id="services" className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </section>
    */
  <div className="services-container">
    <div className="service">
      <img src="/logo192.png" alt="Service 1 Image" />
      <a className="service-button" href="/WebDevelopment">Web Development</a>
      
    </div>
    <div className="service">
      <img src="/logo192.png" alt="Service 2 Image" />
      <a className="service-button" href="/MobileAppDevelopment">Mobile App Development</a>
    </div>
    <div className="service">
      <img src="/logo192.png" alt="Service 3 Image" />
      <a className="service-button" href="/UX_Design">UI/UX Design</a>
    </div>
  </div>
  );
}

export default Services;

