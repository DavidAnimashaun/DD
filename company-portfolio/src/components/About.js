/*import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We are a passionate team of developers dedicated to creating amazing web applications.</p>
    </section>
  );
}

export default About;
*/
import React from 'react';
import '../styles/About.css';
const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We are a passionate team of developers dedicated to creating amazing web applications.</p>
      <div className="team-members-container">
        <div className="team-member">
          <img src={process.env.PUBLIC_URL + '/images/Daniyal_Sohail.jpg'} alt="Team Member 1" />
          <h3>Daniyal Sohail</h3>
          <p>Daniyal is a co-founder of our company. He specializes in web development and has over 10 years of experience.</p>
        </div>
        <div className="team-member">
          <img src="logo512.png" alt="Team Member 2" />
          <h3>David Animashaun</h3>
          <p>David is a co-founder of our company. He specializes in web development and has over 10 years of experience.</p>
        </div>
      </div>
      {/* Add more team members as needed */}
    </section>
  );
}

export default About;
