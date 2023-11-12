import { useEffect, useState } from "react";
import "../App.css";
import contactImage from "../assets/food.jpg";
import NavBar from "../components/NavBar";

export default function BusinessLanding() {
  const data = [
    {
      name: "Cool Hotel",
      location: "123 Real Address",
      type: "Cooked Yams (5lbs)",
      desc: "food1",
      pickup: "Nov 13th, 8:00pm",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
    {
      name: "Cool Hotel",
      location: "123 Real Address",
      type: "Cooked Yams (5lbs)",
      desc: "food2",
      pickup: "Nov 13th, 8:00pm",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
    {
      name: "Cool Hotel",
      location: "123 Real Address",
      type: "Cooked Yams (5lbs)",
      desc: "food3",
      pickup: "Nov 13th, 8:00pm",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
    {
      name: "Cool Hotel",
      location: "123 Real Address",
      type: "Cooked Yams (5lbs)",
      desc: "food4",
      pickup: "Nov 13th, 8:00pm",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
  ];

  /*put the data array here for the items in the drawer*/

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
              <figure>
                <img src={contactImage} alt="Food" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
              <figure>
                <img src={contactImage} alt="Food" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Food!</h2>
                <p>This is a food card!</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Order</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
              <figure>
                <img src={contactImage} alt="Food" />
              </figure>
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
              <button
                className="btn btn-primary w-48"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Create Listing
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box justify-center">
                  <h3 className="font-bold text-lg">Create a new listing!</h3>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
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

          {data.map((item, index) => (
            <div key={index}>
              <div className="card card-compact w-auto bg-base-100 shadow-xl p-0 ">
                <figure className="h-48 w-auto">
                  <img
                    className="object-contain"
                    src={item.food_img}
                    alt="Food"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-black">
                    {item.type}
                    <div className="badge badge-accent"> ${item.price}</div>
                    <div className="badge badge-ghost line-through">
                      ${item.retail_price}
                    </div>
                  </h2>
                  <p className="text-left">{item.desc}</p>
                  <p className="text-left">Pickup by: {item.pickup}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Check Info</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
