import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from './components/Hero';
import './styles/blur.css'

// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <div className="fade-overlay"></div>
    <div className="excluded-element"><Hero/></div>
    <div className="content">
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </>
  );
}

export default App;
