import React from 'react';
import '../styles/navbar.css';



function Navbar (){
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-list-item"><a href="/">Home</a></li>
                <li className="nav-list-item"><a href="/about">About</a></li>
                <li className="nav-list-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;