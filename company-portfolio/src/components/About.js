// Updated About Component
import React from 'react';
import '../styles/About.css';

import davidImage from '../images/david.jpg';
import daniyalImage from '../images/daniyal.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      
      <div className="wrap">
        <div className="info">
          <div className="info-col info-col-left">
            <div className="info-item orange">
              <div className="info-item-text">
                <img src={davidImage} alt="David" className="person-image" />
                <h3>David Animashaun<span className="mark"></span></h3>
                <p>Co-owner</p>
              </div>
            </div>
          </div>
          <div className="info-col-middle">
            {/* Additional content for the middle section */}
            <div className="middle-content">
              <h3>Welcome to VersaWeb Design</h3>
              <p>
                At VersaWeb Design, we are passionate about creating stunning and innovative web solutions.
                Our team is dedicated to delivering high-quality websites that not only meet but exceed
                our clients' expectations.
              </p>
            </div>
          </div>
          <div className="info-col info-col-right">
            <div className="info-item red">
              <div className="info-item-text">
                <img src={daniyalImage} alt="Daniyal" className="person-image" />
                <h3>Daniyal Sohail <span className="mark"></span></h3>
                <p>Co-owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
