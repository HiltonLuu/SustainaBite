// AboutPage.jsx
import React from 'react';
import './AboutPage.css'; // Import the CSS file

const AboutPage = () => {
    return (
        <div className="container"> {/* Use a container for styling */}
            <h1>About Us</h1>
            <p>
                Welcome to our company! We are dedicated to providing innovative solutions
                in the world of technology and programming. Our team of experts is committed
                to excellence and pushing the boundaries of what's possible.
            </p>
{/* =======
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [aboutInfo, setAboutInfo] = useState({ title: '', content: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5001/about')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAboutInfo(data);
            })
            .catch(error => {
                console.error("Could not fetch about data:", error);
                setError(error);
            });
    }, []); // The empty array ensures this effect runs once on component mount

    return (
        <div>
            <h1>{aboutInfo.title || 'Loading...'}</h1>
            {aboutInfo.content ? <p>{aboutInfo.content}</p> : error ? <p>Error: {error.message}</p> : null}
>>>>>>> 64db99a3d0ddd73fb4c83b3459e569a280a1dd30 */}
        </div>
    );
};

export default AboutPage;
