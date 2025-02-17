import React from 'react';
import '../styles/components/educationcards.css'

export default function EducationCards(){

    return (
        <div className="section" id="education">
            <hr className="section-split"/>
            <h1 className="section-header game-font">Education</h1>
            <div className="content">
                <div className="cards" id="card1">
                    <div className="accomplishment">Bachelor of Science</div>
                    <div className="major">Computer Science</div>
                    <div className="school">Tennessee Technological University</div>
                    <div className="year">2022</div>
                    <div className="hoverformore">Hover for more</div>
                    <div className="gpa showonhover card-section"><div className="card-section-title">GPA:</div> 3.2</div>
                    <div className="focus showonhover card-section"><div className="card-section-title">Focus:</div> Software Development</div>
                    <div className="minor showonhover card-section"><div className="card-section-title">Minor:</div> Mathematics</div>
                </div>
                <div className="cards" id="card2">
                    <div className="accomplishment">Master of Science</div>
                    <div className="major">AI & Machine Learning</div>
                    <div className="school">Tennessee Technological University</div>
                    <div className="year">2024</div>
                    <div className="hoverformore">Hover for more</div>
                    <div className="gpa showonhover card-section"><div className="card-section-title">GPA:</div> 3.5</div>
                    <div className="focus showonhover card-section"><div className="card-section-title">Focus:</div> Computer Vision</div>
                    <div className="minor showonhover card-section"><div className="card-section-title">Project:</div> 3D-Print failure detection using Computer Vision</div>
                </div>
            </div>
        </div>
    )
}