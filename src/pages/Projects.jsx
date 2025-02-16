import React from 'react';
import '../styles/pages/projects.css';
import ProjectCards from "../components/ProjectCards";


export default function Projects(){
    return(
        <div className="projects-page-container">
            <h1 id="projects-title">All Projects</h1>
            <p id="projects-desc"></p>

            <ProjectCards count={100}/>
        </div>
    );
}