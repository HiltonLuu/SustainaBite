import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [data, setData] = useState(null); // State to hold the fetched data
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to hold any errors

    useEffect(() => {
        // Function to fetch data from FastAPI
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5001/about-data'); // Replace with your FastAPI endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data); // Set the data in state
            } catch (e) {
                setError(e.message); // Set any errors that occur during fetch
            } finally {
                setIsLoading(false); // Ensure we disable the loading state
            }
        };

        fetchData(); // Call the fetch function when the component mounts
    }, []); // The empty array means this effect runs once on mount

    // Render the component based on the state
    return (
        <div>
            <h1>About Us</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    {/* Render more data as needed */}
                </div>
            )}
        </div>
    );
};

export default AboutPage;
