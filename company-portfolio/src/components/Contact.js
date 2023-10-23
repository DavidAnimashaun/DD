import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to a server.
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="form">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Write your name here.."
              required
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Let us know how to contact you back.."
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What would you like to tell us.."
              required
            />
          </p>
          <button type="submit">Send Message</button>
        </form>
        <div>
          <span className="fa fa-phone"></span>001 1023 567
          <span className="fa fa-envelope-o"></span> contact@company.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
