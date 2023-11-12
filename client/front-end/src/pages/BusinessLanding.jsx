import { useEffect, useState } from "react";
import "../App.css";
import contactImage from "../assets/food.jpg";
import NavBar from "../components/NavBar";

export default function BusinessLanding() {
  return (
    <div>
      <img src={contactImage} alt="Contact" />
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={contactImage} alt="Food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Food!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
