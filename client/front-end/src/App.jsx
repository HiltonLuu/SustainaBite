import { useEffect, useState } from "react";
import "./App.css";

export default function App() {


  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/createUser", {
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
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </div>)
}
