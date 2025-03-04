import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Hero from './components/Hero';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './styles/blur.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <div className="fade-overlay"></div>}

      {isHomePage && <div className="excluded-element"><Hero/></div>}

      <div className={`content ${isHomePage ? "blurred-content" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
