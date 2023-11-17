import React from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import SlideRoutes from "react-slide-routes";

import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";

import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Curious from "./pages/Curious";

function App() {
  return (
    <>
    <Navbar />

      <SlideRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/curious" element={<Curious/>}/> */}
          <Route path="/contact" element={<Contact />} />
      </SlideRoutes>

      <Footer/>
    </>

  );
}


export default App;
