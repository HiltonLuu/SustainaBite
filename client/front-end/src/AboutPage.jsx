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
        </div>
    );
};

export default AboutPage;
