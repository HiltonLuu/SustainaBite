// DonationsPage.jsx
import React, { useState } from 'react';

const DonationsPage = () => {
    // Dummy data for donations (you can replace it with real data)
    const [donations, setDonations] = useState([
        { id: 1, amount: 50, donorName: 'Anonymous', date: 'November 15, 2023' },
        { id: 2, amount: 100, donorName: 'Anonymous', date: 'November 14, 2023' },
        { id: 3, amount: 25, donorName: 'Anonymous', date: 'November 13, 2023' },
        { id: 4, amount: 75, donorName: 'Anonymous', date: 'November 12, 2023' },
        { id: 5, amount: 200, donorName: 'Anonymous', date: 'November 11, 2023' },
        { id: 6, amount: 10, donorName: 'Anonymous', date: 'November 10, 2023' },
        { id: 7, amount: 150, donorName: 'Anonymous', date: 'November 9, 2023' },
        { id: 8, amount: 30, donorName: 'Anonymous', date: 'November 8, 2023' },
        { id: 9, amount: 80, donorName: 'Anonymous', date: 'November 7, 2023' },
        { id: 10, amount: 55, donorName: 'Anonymous', date: 'November 6, 2023' },
    ]);

    return (
        <div>
            <h1>Make a Donation</h1>
            <div className="donations-list">
                {donations.map((donation, index) => (
                    <div key={index} className="donation-box">
                        <div className="donation-header">
                            <img src="/heart-icon.png" alt="Heart Icon" className="heart-icon" />
                            <span className="donation-amount">${donation.amount}</span>
                        </div>
                        <div className="donation-details">
                            <p className="donation-donor">{donation.donor}</p>
                            <p className="donation-date">Donated on: {donation.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationsPage;
