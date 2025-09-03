import React from "react";
import "../styles/components/global_component.css";
import "../styles/pages/resume.css";

function Resume() {
    return (
        <div className="resume-container component">
            <h1 className="title">Resume</h1>
            <div className="resume-content">
                <div className="subtitle education">
                    <h2 className="header">Education</h2>
                    <div className="education-card">
                        <div className="flex">
                            <p className="school">Tennessee Technological University</p>
                            <p className="period">Jan. 2023 - May 2025</p>
                        </div>
                        <p className="degree">Masters Degree in Computer Science, Artificial Intelligence and Machine Learning</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
