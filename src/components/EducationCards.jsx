import React from 'react';
import '../styles/components/educationcards.css';

export default function EducationCards(){

    return (
        <div id="education">
            <h1 className="section-header game-font">Education</h1>
            <div className="content">
                <div className="cards" id="card1">
                    <div className="front">
                        <div className="accomplishment">Bachelor of Science</div>
                        <div className="major">Computer Science</div>
                        <div className="school">Tennessee Technological University</div>
                        <div className="year">2022</div>
                        <div className="hoverformore">Hover for more</div>
                    </div>
                </div>
                <div className="cards" id="card2">
                    <div className="front">
                        <div className="accomplishment">Master of Science</div>
                        <div className="major">AI & Machine Learning</div>
                        <div className="school">Tennessee Technological University</div>
                        <div className="year">2024</div>
                        <div className="hoverformore">Hover for more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}