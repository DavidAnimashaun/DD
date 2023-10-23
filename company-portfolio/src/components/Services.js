import React from 'react';
import '../styles/Services.css';

import webImage from '../images/web.jpg';
import appImage from '../images/app.jpg';
import uiImage from '../images/ui.jpg';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <div className="service-img-background" style={{ backgroundImage: `url(${webImage})` }}></div>
          <div className="service-text-wrapper">
            <h3>Web Development</h3>
            <p>A comprehensive range of web development services to create stunning and functional websites.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-img-background" style={{ backgroundImage: `url(${appImage})` }}></div>
          <div className="service-text-wrapper">
            <h3>Mobile App Development</h3>
            <p>Crafting innovative mobile applications tailored to meet your specific business needs.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-img-background" style={{ backgroundImage: `url(${uiImage})` }}></div>
          <div className="service-text-wrapper">
            <h3>UI/UX Design</h3>
            <p>Creating engaging user interfaces and user experiences for digital products and services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
