import { useState } from 'react';
import '../styles/components/navbar.css';



function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="navbar">
            <h1 className="nav-name"><a href="/">Kase J.</a></h1>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                <li className="nav-list-item"><a href="/">About</a></li>
                <li className="nav-list-item"><a href="/projects">Projects</a></li>
                <li className="nav-list-item"><a href="/contact">Contact</a></li>
                <li className="nav-list-item"><a href="/resume" className="resume-btn">Resume</a></li>
            </ul>
        </div>
    );
}

export default Navbar;