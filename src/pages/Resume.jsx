import React from 'react';

export default function Resume() {
    return (
        <div id="resume-container" className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-center mb-4">My Resume</h1>
                <iframe 
                    src="/resume.pdf" 
                    className="w-full h-[600px] border rounded-md"
                    title="Resume PDF"
                ></iframe>
            </div>
        </div>
    );
}
