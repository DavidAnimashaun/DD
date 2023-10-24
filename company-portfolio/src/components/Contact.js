import React, { useState } from 'react';
import '../styles/Contact.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      
      console.log(docRef);

      
      setSubmitMessage('Your form was submitted successfully!');

      // Clear form details
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error.message);

      // Set error message
      setSubmitMessage('Please try again. An error occurred.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="form">
        <h2>CONTACT US</h2>
        {submitMessage && <p className={submitMessage.includes('error') ? 'error' : 'success'}>{submitMessage}</p>}
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
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What would you like to tell us.."
              required
            />
          </p>
          <button type="submit"> Send Message </button>
        </form>
        <div>
          <li><span className="phone"></span> Phone Number 443-484-6589</li>
          <li><span className="phone"></span> Phone Number 410-978-8337</li>
        </div>
      </div>
    </section>
  );
};

export default Contact;

