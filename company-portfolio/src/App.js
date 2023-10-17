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
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css'; // Import your App.css file if you create one.
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
//import WebDevelopment from './components/WebDevelopment'; // Import the new components
//import MobileAppDevelopment from './components/MobileAppDevelopment';
//import UX_Design from './components/UX_Design';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <About/>
      <Services/>
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
/*
function App() {
  return (
    <Router >
    <div className="App">
      <Header />
      <Switch> 
        <Route path='/' exact component={About}/>
        <Route path='/services' component={Services}/>
        <Route path = '/WebDevelopment' component={WebDevelopment}/>
        <Route path = '/MobileAppDevelopment' component={MobileAppDevelopment}/>
        <Route path = '/WebDevelopment' component={UX_Design}/>
      </Switch>
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;*/

