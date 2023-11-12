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
      npo_name: "The Mustard Seed"
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
      npo_name: "The Mustard Seed"
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
      npo_name: "The Mustard Seed"
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
      npo_name: "The Mustard Seed"
    },
  ];

  /*put the data array here for the items in the drawer*/

  return (
    <div>
      <div className="collapse bg-base-200 mr-10 ml-10 mt-20 w-auto">

        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click to see your confirmed orders
        </div>

        <div className="collapse-content">
          <div className="carousel gap-4">
            {data.map((item, index) => (
              <div key={index}>
                <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
                  <figure className="h-48">
                    <img src={item.food_img} alt="Food" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-sm">{item.type}
                      <div className="badge badge-accent badge-sm">${item.price}</div>
                      <div className="badge badge-ghost badge-sm line-through">${item.retail_price}</div>
                    </h2>
                    <p className="text-sm text-left">
                      <span className="font-bold text-sm">Pick up by:</span>{item.npo_name}
                    </p>
                    <div class="h-16 overflow-hidden">
                      <p class="overflow-ellipsis text-sm text-left">
                        {item.desc}
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <label htmlFor="my_modal_6" className="btn btn-primary btn-sm">Check Info</label>
                      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                      <div className="modal modal-middle">
                        <div className="modal-box justify-center pr-0 pl-0 pt-0 max-w-xl">
                          <figure className="h-48 w-full"><img className="rounded object-contain" src={item.food_img} /></figure>
                          <div className="flex m-10 no-flex">
                            <div className="w-72 pr-8">
                              <h1 className="text-3xl font-bold text-left">{item.type}</h1>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Pick up by:</span>{item.npo_name}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Pick up before:</span> {item.pickup}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Price: $</span> {item.price}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Retail Price: $</span> {item.retail_price}
                              </p>
                            </div>
                            <div className="text-left">
                              <p class="font-bold">Description:</p>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                          <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn mr-4">Close!</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-4 gap-4 m-20">
          <div className="card card-compact w-auto bg-base-100 shadow-xl p-0 justify-center">
            <div className="flex justify-center">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-primary w-48"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Create Listing
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box justify-center max-w-3xl">
                  <div className="flex no-flex">
                    <div className="p-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter your listing name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter price</span>
                        </label>
                        <input type="number" placeholder="$0.00" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter retail price</span>
                        </label>
                        <input type="number" placeholder="$0.00" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter pickup before date</span>
                        </label>
                        <input type="date" placeholder="$0.00" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter pickup before time </span>
                        </label>
                        <input type="time" placeholder="$0.00" className="input input-bordered" />
                      </div>
                    </div>
                    <div className="text-left p-4 pl-8 w-full">
                      <h2 className="pb-4">Enter a description for your listing</h2>
                      <div className="form-control">
                        <textarea type="text" placeholder="Type here" className="input input-bordered p-8" />
                      </div>
                    </div>
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
                    <label htmlFor="my_modal_7" className="btn btn-primary btn-sm">Check Info</label>
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal modal-middle">
                      <div className="modal-box justify-center pr-0 pl-0 pt-0 max-w-xl">
                        <figure className="h-48 w-full"><img className="rounded object-contain" src={item.food_img} /></figure>
                        <div className="flex m-10 no-flex">
                          <div className="w-72 pr-8">
                            <h1 className="text-3xl font-bold text-left">{item.type}</h1>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Pick up by: </span>{item.npo_name}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Pick up time: </span>{item.pickup}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Price: </span>{item.price}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Retail Price: </span>{item.retail_price}
                            </p>
                          </div>
                          <div className="text-left">
                            <p class="font-bold">Description:</p>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="my_modal_7" className="btn mr-4">Close!</label>
                        </div>
                      </div>
                    </div>
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
