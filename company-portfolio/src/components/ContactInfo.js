import React from 'react';
import '../styles/ContactInfo.css'; // Adjust the path to the CSS file

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
      <p>Phone: +1-555-555-5555</p>
      <p>Address: 123 Main Street, City</p>
    </div>
  );
}

export default ContactInfo;
