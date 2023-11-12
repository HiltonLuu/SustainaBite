import { useEffect, useState } from "react";
import "./App.css";
import BusinessLanding from "./pages/BusinessLanding";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage'; // Make sure the path is correct
import ContactPage from './Orders'; // Make sure the path is correct
import DonationsPage from './DonationsPage.jsx'; // Import the DonationsPage component
import './App.css';


export default function App() {


  useEffect(() => {
    
    fetch("http://127.0.0.1:5001/createUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Hilton",
        age: 10
      })
    }).then( (res) => {
      console.log(res); 
    })
  }, [])

return (
  <Router>
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/Orders">Orders</Link> | 
      <Link to="/donations">Donations</Link> {/* Add a link to "/donations" */}
    </nav>

    <Routes>
      <Route path="/" element={<div><h1 className="text-3xl font-bold underline">Hello world!</h1></div>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Orders" element={<ContactPage />} />
      <Route path="/donations" element={<DonationsPage />} /> {/* Add this route */}
    </Routes>
  </Router>
);
}
