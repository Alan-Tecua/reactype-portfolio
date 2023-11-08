import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './About';
import Projects from './Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Header />

      <Router>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={About} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
      </Router>
    </>

  );
}


export default App;
