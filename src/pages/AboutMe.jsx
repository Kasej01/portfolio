import React from "react";
import "../styles/pages/about.css";


function AboutMe({component: Component}) {
    return (
        <div className="about-container">
            <Component className="navbar"/>
            Hello this is my about me section
        </div>
    );
}

export default AboutMe;
