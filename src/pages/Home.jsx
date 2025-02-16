import React, { useEffect, useState } from "react";
import "../styles/pages/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectCards from "../components/ProjectCards";
import EducationCards from "../components/EducationCards";

function Home() {
    return (
        <div className="home-container">
            <div className="section1">
                <div className="quick-navigation">
                    <h2 className="quick-nav-title">Quick Navigation</h2>
                    <a className="quick-nav-button" id="projectsbtn" href="#projects">Projects</a>
                    <a className="quick-nav-button" id="educationbtn" href="#education">Education</a>
                    <a className="quick-nav-button" id="experiencebtn" href="#experience">Experience</a>
                    <a className="quick-nav-button" id="skillsbtn" href="#skills">Skills</a>
                </div>

                <div className="about-me">
                    <div className="game-font myname">Kase Johnson</div>
                    <div className="game-font myoccupation">Software Engineer</div>
                    <div className="game-font mystory">Recent Master's graduate from Tennessee Technological University</div>
                </div>

                <div className="socials">
                    <div className="icons-container">
                        <a href="https://github.com/Kasej01" target="_blank" rel="noopener noreferrer" className="icon-a" id="github-icon">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/kase-johnson-02a974205/" target="_blank" rel="noopener noreferrer" className="icon-a" id="linkedin-icon">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                    </div>
                    <p className="socials-title">Socials</p>
                </div>
            </div>
            <ProjectCards count={3}/>
            <EducationCards/>
            <div id="experience">
                <h1 className="section-header" id="experience-title">Experience</h1>
                <div className="experience-item" id="first">
                    <h1 className="year game-font">2022</h1>
                    <div className="contents">
                        <h2 className="achievement">Bachelor of Science</h2>
                        <h3 className="study">Computer Science</h3>
                        <h3 className="school">Tennessee Technological Univeristy</h3>
                    </div>
                </div>
                <div className="experience-item" id="second">
                    <h1 className="year game-font">2023</h1>
                    <div className="contents">
                        <h2 className="achievement">Enrolled in Graduate School</h2>
                        <h3 className="study">A.I. and Machine Learning</h3>
                        <h3 className="school">Tennessee Technological Univeristy</h3>
                    </div>
                </div>
                <div className="experience-item" id="third">
                    <h1 className="year game-font">2024</h1>
                    <div className="contents">
                        <h2 className="achievement">Master of Science</h2>
                        <h3 className="study">A.I. and Machine Learning</h3>
                        <h3 className="school">Tennessee Technological Univeristy</h3>
                    </div>
                </div>
            </div>
            <div id="skills">Skills</div>
        </div>
    );
}

export default Home;
