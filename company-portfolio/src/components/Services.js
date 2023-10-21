import React from 'react';
import '../styles/Services.css';
const Services = () => {
  return (
  <section id="services" className="services">
    <h2>Our Services</h2>
    <div className="services-container">
      <div className="service">
        <img src="/logo192.png" alt= "Service 1 " />
        <a className="service-button" href="/Web-Development">Web Development</a>
      </div>

      <div className="service">
        <img src="/logo192.png" alt="Service 2 " />
        <a className="service-button" href="/Mobile-App-Development">Mobile App Development</a>
      </div>

      <div className="service">
        <img src="/logo192.png" alt="Service 3 " />
        <a className="service-button" href="/UI-UX-Design">UI/UX Design</a>
      </div>
    </div>
  </section>
  );
}
export default Services;










//////////////MULTI-PAGE APPLICATION CODE ///////////////////
/*

const Services = ({ onSelectPage }) => {
  const handleServiceClick = (service) => (e) => {
    e.preventDefault();
    const url = `/${service}`;
    onSelectPage(service);
    window.location.href = url;
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <img src="/logo192.png" alt="Service 1" />
          <button className="service-button" href="/Web-Development" onClick={handleServiceClick('Web-Development')}>
            Web Development
          </button>
        </div>

        <div className="service">
          <img src="/logo192.png" alt="Service 2" />
          <button className="service-button" href="/Mobile-App-Development" onClick={handleServiceClick('Mobile-App-Development')}>
            Mobile App Development
          </button>
        </div>

        <div className="service">
          <img src="/logo192.png" alt="Service 3" />
          <button className="service-button" href="/UI-UX-Design" onClick={handleServiceClick('UI-UX-Design')}>
            UI/UX Design
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;

*/
