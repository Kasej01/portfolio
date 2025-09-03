import { useState } from 'react';
import '../styles/components/navbar.css';



function Navbar (){
    return (
        <div className="navbar">

            <ul>
                <li className="nav-list-item"><a href="/">About</a></li>
                <li className="resume-list-item"><a href="/resume" className="resume-btn">Resume</a></li>
                <li className="nav-list-item"><a href="/projects">Projects</a></li>
                <li className="nav-list-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;