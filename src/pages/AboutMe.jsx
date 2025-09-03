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

            <div className="what-i-do">
                <h2 className="subtitle">What I do</h2>
                <div className="skills">
                    <div className="section">
                        <img className="image" src="/SQL_logo.png" alt="SQL logo" />
                        <div className="subsection">
                            <h3 className="skill">Database Management</h3>
                            <p className="desc">Experience in large scale database management and SQL.</p>
                        </div>
                    </div>
                    <div className="section">
                        <img className="image" src="/WebDev_logo.png" alt="Web Development logo" />
                        <div className="subsection">
                            <h3 className="skill">Web Development</h3>
                            <p className="desc">Knowledge and experience in major web development languages and frameworks.</p>
                        </div>
                    </div>
                    <div className="section">
                        <img className="image" src="/ObjectOrientedProgramming_logo.png" alt="Object Oriented Programming logo" />
                        <div className="subsection">
                            <h3 className="skill">O-O-P</h3>
                            <p className="desc">Experience in C#/.NET and Java - Object Oriented Programming</p>
                        </div>
                    </div>
                    <div className="section">
                        <img className="image" src="/AI_logo.png" alt="AI & Machine Learning logo" />
                        <div className="subsection">
                            <h3 className="skill">AI & ML</h3>
                            <p className="desc">Masters degree focused in AI & Machine Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
