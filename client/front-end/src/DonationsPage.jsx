// DonationsPage.jsx
import React, { useState } from "react";

const DonationsPage = () => {
  // Dummy data for donations (you can replace it with real data)
  const [donations, setDonations] = useState([
    { id: 1, amount: 50, donorName: "Anonymous", date: "November 15, 2023" },
    { id: 2, amount: 100, donorName: "Anonymous", date: "November 14, 2023" },
    { id: 3, amount: 25, donorName: "Anonymous", date: "November 13, 2023" },
    { id: 4, amount: 75, donorName: "Anonymous", date: "November 12, 2023" },
    { id: 5, amount: 200, donorName: "Anonymous", date: "November 11, 2023" },
    { id: 6, amount: 10, donorName: "Anonymous", date: "November 10, 2023" },
    { id: 7, amount: 150, donorName: "Anonymous", date: "November 9, 2023" },
    { id: 8, amount: 30, donorName: "Anonymous", date: "November 8, 2023" },
    { id: 9, amount: 80, donorName: "Anonymous", date: "November 7, 2023" },
    { id: 10, amount: 55, donorName: "Anonymous", date: "November 6, 2023" },
  ]);

  const [donations2, setDonations2] = useState([
    { id: 1, amount: 50, donorName: "Anonymous", date: "November 15, 2023" },
    { id: 2, amount: 100, donorName: "Anonymous", date: "November 14, 2023" },
    { id: 3, amount: 25, donorName: "Anonymous", date: "November 13, 2023" },
    { id: 4, amount: 75, donorName: "Anonymous", date: "November 12, 2023" },
    { id: 5, amount: 200, donorName: "Anonymous", date: "November 11, 2023" },
    { id: 6, amount: 10, donorName: "Anonymous", date: "November 10, 2023" },
    { id: 7, amount: 150, donorName: "Anonymous", date: "November 9, 2023" },
    { id: 8, amount: 30, donorName: "Anonymous", date: "November 8, 2023" },
    { id: 9, amount: 80, donorName: "Anonymous", date: "November 7, 2023" },
    { id: 10, amount: 55, donorName: "Anonymous", date: "November 6, 2023" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Make a Donation</h1>
      <div className="grid grid-cols-2 gap-6">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="text-black border p-6 flex flex-col items-center text-center"
          >
            <div className="text-xl font-bold mb-3">${donation.amount}</div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold mb-1">{donation.donorName}</div>
              <div className="text-sm text-gray-500">{donation.date}</div>
            </div>
            <div className="heart-icon text-2xl mb-1">❤️</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationsPage;
