import React from "react";
import "../styles/components/global_component.css";
import "../styles/pages/about.css";

function AboutMe() {
    return (
        <div className="about-container component">
            <h1 className="title">About Me</h1>

            <p className="description">
                Hello! I'm Kase Johnson, a developer with a Masters Degree in Computer Science and a love for creating innovative 
                and useful digital solutions. With a background in Software/Full Stack Development, 
                I enjoy working on both front-end and back-end applications, and I'm always eager to learn new technologies and improve my skills.
                
                <br/>
                <br/>
                I have experience in various programming languages and frameworks, with a professional focus on C#, .NET, Angular, SQL, and a
                 personal interest in Python, Javascript, React, Java, and AI & Machine Learning.
                <br/>
            </p>

            <h2 className="subtitle">What I do</h2>
        </div>
    );
}

export default AboutMe;
