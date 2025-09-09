import { useState } from 'react';
import '../styles/components/profile.css';



function Navbar (){
    return (
        <div className="profile-container">
            <div className="photo-container">
                <img src="/ProfessionalPicture.jpg" alt="Profile Photo" id="profile-photo"/>
            </div>            
            <h1 className="name">Kase Johnson</h1>
            <p className="occupation">Software Engineer</p>


            <div className="profile-info">
                <div className="email">
                    <div className="text-area">
                        <p className="title">Email</p>
                        <p>kasejohnson01@gmail.com</p>
                    </div>
                </div>

                <div className="phone">
                    <div className="text-area">
                        <p className="title">Phone</p>
                        <p>(931)-650-0525</p>
                    </div>
                </div>

                <div className="location">
                    <div className="text-area">
                        <p className="title">Location</p>
                        <p>Cookeville, TN</p>
                    </div>
                </div>

                <div className="links">
                    <div className="text-area">
                        <p className="title">Links</p>
                        <a href="">GitHub</a>
                        <br/>
                        <a href="">LinkedIn</a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Navbar;