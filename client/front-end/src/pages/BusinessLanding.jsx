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
        <div className="collapse-content">
          <div className="carousel gap-4">
            <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
              <figure><img src={contactImage} alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
              <figure><img src={contactImage} alt="Food" /></figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
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
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0 justify-center">
            <div className="flex justify-center">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-primary w-48" onClick={() => document.getElementById('my_modal_1').showModal()}>Create Listing</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box justify-center">
                <h3 className="font-bold text-lg">Create a new listing!</h3>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                <div className="form-control w-full max-w-xs">
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            </div>
          </div>
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0 ">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-a-bowl-of-ramen-with-chopsticks-and-eggs.jpeg" alt="Food" /></figure>
            <div className="card-body">
              <h2 className="card-title">Ramen
              <div className="badge badge-accent"> $5.00</div>
              <div className="badge badge-ghost line-through"> $15.00</div>
              </h2>
              <p className="text-left">This is a food card!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check Info</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg" alt="Food" /></figure>
            <div className="card-body">
              <h2 className="card-title">Sushi</h2>
              <p className="text-left">Get discounted sushi</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
