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
          <p>John is a co-founder of our company. He specializes in web development and has over 10 years of experience.</p>
        </div>
        <div className="team-member">
          <img src="logo512.png" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Jane is a creative designer. She's passionate about creating stunning visuals and user experiences.</p>
        </div>
      </div>
      {/* Add more team members as needed */}
    </section>
  );
}

export default About;
