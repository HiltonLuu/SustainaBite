import { useEffect, useState, createContext } from "react";
import BusinessLanding from "./pages/BusinessLanding";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage"; // Make sure the path is correct
import ContactPage from "./ContactPage"; // Make sure the path is correct
import "./App.css";
import MainRouter from "./MainRouter";
import NavBar from "./components/NavBar";
import { UserContext } from "./UserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  /*
  useEffect(() => {
    fetch("http://127.0.0.1:5001/createUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Hilton",
        age: 10,
      }),
    }).then((res) => {
      console.log(res);
    });
  }, []);
*/
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavBar />
      <MainRouter />
    </UserContext.Provider>
  );
}
