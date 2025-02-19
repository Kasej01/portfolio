import React from 'react';
import ProjectCards from '../components/ProjectCards';
import '../styles/components/projectcards.css';


export default function Projects(){
    return (
        <div className="projects-container">
            <ProjectCards count={100} header="All Projects" button="false"/>
        </div>
    )
}