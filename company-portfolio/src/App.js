/*import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import './styles/App.css'; // Import your App.css file if you create one.
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
//import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


//////////////////MULTI-PAGE APPLICATION CODE ////////////////////
/*
import React, { useState, useEffect} from 'react';
import './styles/App.css'; // Import your App.css file if you create one.
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import WebDevelopment from './components/WebDevelopment';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import UIUXDesign from './components/UIUXDesign';
function App() {
  const [selectedPage, setSelectedPage]  = useState('home');
  
  useEffect(() => {
    const path = window.location.pathname;
    // Remove the leading '/' to get the selectedPage
    setSelectedPage(path.substring(1));
  }, []);

  const renderPage = () => {
    switch (selectedPage) {
      case 'home':
        return (
          <div className="App">
          <Header />
          <About />
          <Services onSelectPage={setSelectedPage} />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      );
      case 'Web-Development':
        return <WebDevelopment />;
      case 'Mobile-App-Development':
        return <MobileAppDevelopment />;  
      case 'UI-UX-Design':
        return <UIUXDesign />;
      default:
        return (
          <div className="App">
            <Header />
            <About />
            <Services onSelectPage={setSelectedPage} />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        );
    }
  };
  return renderPage();

}

export default App;
*/


