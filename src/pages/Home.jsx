import React from "react";
import "../styles/pages/home.css";
import AboutMe from './AboutMe';
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

function Home() {
    return (
        <div className="home-container">
            <div className="profile">
                <Profile/>
            </div>            
            <div className="right">
                <AboutMe component={Navbar}/>
            </div>
        </div>
    );
}

export default Home;
