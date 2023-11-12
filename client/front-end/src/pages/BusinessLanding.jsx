import { useEffect, useState } from "react";
import "../App.css";
import contactImage from '../assets/food.jpg';

export default function BusinessLanding() {

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure><img src={contactImage} alt="Food" /></figure>
          <div className="card-body">
            <h2 className="card-title">Food!</h2>
            <p>This is a food card!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure><img src={contactImage} alt="Food" /></figure>
          <div className="card-body">
            <h2 className="card-title">Food!</h2>
            <p>This is a food card!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure><img src={contactImage} alt="Food" /></figure>
          <div className="card-body">
            <h2 className="card-title">Food!</h2>
            <p>This is a food card!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure><img src={contactImage} alt="Food" /></figure>
          <div className="card-body">
            <h2 className="card-title">Food!</h2>
            <p>This is a food card!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-base-100 shadow-xl">
          <figure><img src={contactImage} alt="Food" /></figure>
          <div className="card-body">
            <h2 className="card-title">Food!</h2>
            <p>This is a food card!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
