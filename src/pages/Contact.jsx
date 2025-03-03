import React from 'react';
import '../styles/pages/contact.css';

export default function Contact(){
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <p>I'd love to hear from you! Whether you have a question about my projects, want to collaborate, or just want to say hi, feel free to drop me a message.</p>
            
            <form id="contact-form" action="https://formspree.io/f/mdknogen" method="POST">
                <div className="input-container">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="input" type="text" id="name" name="name" required />
                    <div className="bar"></div>
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" name="email" required />
                    <div className="bar"></div>
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea className="input" id="message" name="message" rows="4" required></textarea>
                    <div className="bar"></div>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
}