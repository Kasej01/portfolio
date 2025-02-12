import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



function Home() {

    return (
        <div className = "home-container">
            <div className="socials">
                <p className="socials-title">Socials</p>
                <div className="icons-container">
                    <a href="https://github.com/Kasej01" target="_blank" rel="noopener noreferrer" className="icon-a" id="github-icon">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/kase-johnson-02a974205/" target="_blank" rel="noopener noreferrer" className="icon-a" id="linkedin-icon">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;