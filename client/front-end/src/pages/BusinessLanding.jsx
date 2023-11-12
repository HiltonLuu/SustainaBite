import { useEffect, useState } from "react";
import "../App.css";
import contactImage from '../assets/food.jpg';

export default function BusinessLanding() {

  return (
    <div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Open to see your confirmed orders
        </div>
        <div className="collapse-content align-top">
          <div className="carousel gap-4">
            <div className="card card-compact w-auto bg-base-100 carousel-item p-0 w-48 h-72">
              <figure><img src={contactImage} alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-auto bg-base-100 carousel-item p-0 w-48 h-72">
              <figure><img src={contactImage} alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-auto bg-base-100 carousel-item p-0 w-48 h-72">
              <figure><img src={contactImage} alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-a-bowl-of-ramen-with-chopsticks-and-eggs.jpeg" alt="Food" /></figure>
            <div className="card-body">
              <h2 className="card-title">Food!</h2>
              <p>This is a food card!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Reserve Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg" alt="Food" /></figure>
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
