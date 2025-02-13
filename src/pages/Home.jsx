import React, { useEffect, useState } from "react";
import "../styles/pages/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import fetchAllRepositories from '../utilities/fetchFromGit';

function Home() {
    const [repoNames, setRepoNames] = useState([]);
    const [repoUrls, setRepoUrls] = useState([]);
    const [repoDescriptions, setRepoDescriptions] = useState([]);
    const [repoUpdates, setRepoUpdates] = useState([]);
    let i =0;
    const data = fetchAllRepositories();

    useEffect (() => {
        async function fetchData() {
            try{
            const data = await fetchAllRepositories();

            const names = [];
            const urls = [];
            const descriptions = [];
            const updates = [];

            data.forEach(repo =>{
                names.push(repo.name);
                urls.push(repo.html_url);
                descriptions.push(repo.description);
                updates.push(repo.updated_at);
                i++;
            });

            setRepoNames(names);
            setRepoUrls(urls);
            setRepoDescriptions(descriptions);
            setRepoUpdates(updates);
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
        }
        fetchData();
    }, []);


    return (
        <div className="home-container">
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

            <div id="projects">
                <h3>Most recent Projects</h3>
                <ul>
                    {repoNames.map((repo, index) => (
                        <li key={index} className="card-container">
                            <a className="link-container" href={repoUrls[index]} target="_blank" rel="noopener noreferrer">
                                <p className="repo-name">{repo}</p>
                                <p className="repo-desc">{repoDescriptions[index]}</p>
                                <p className="repo-update">Last Updated: {repoUpdates[index]}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="education">Education</div>
            <div id="experience">Experience</div>
            <div id="skills">Skills</div>
        </div>
    );
}

export default Home;
