import { useEffect, useState } from "react";
import "../App.css";
import contactImage from "../assets/food.jpg";
import NavBar from "../components/NavBar";

export default function BusinessLanding() {
  const data = [
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Vegatables (30lbs)",
      desc: "Carrots, broccoli, potato, onions, etc.",
      pickup: "Nov 14th, 6:30pm",
      price: 20,
      retail_price: 50,
      food_img:
        "https://images.pexels.com/photos/3988952/pexels-photo-3988952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "The Mustard Seed",
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Vegatables (15lbs)",
      desc: "Broccoli, yam, ginger, tomato, etc.",
      pickup: "Nov 13th, 8:00pm",
      price: 15,
      retail_price: 30,
      food_img:
        "https://images.pexels.com/photos/7657071/pexels-photo-7657071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "The Mustard Seed",
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Fruits and Veggies (20lbs)",
      desc: "Mango, kiwi, cucumber, carrots, etc.",
      pickup: "Nov 15th, 8:30am",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/162825/healthy-food-fresh-organic-162825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "The Mustard Seed",
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Pasteries (10lbs)",
      desc: "Muffins, cookies, bread, scones, etc.",
      pickup: "Nov 13th, 7:30pm",
      price: 8,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=800",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "The Mustard Seed",
    },
  ];

  const data2 = [
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Vegatables (25lbs)",
      desc: "Pepper, carrot, potato, onions, etc.",
      pickup: "Nov 13th, 2:30pm",
      price: 18,
      retail_price: 35,
      food_img:
        "https://images.pexels.com/photos/5842510/pexels-photo-5842510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "Food Banks Canada"
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Vegatables (15lbs)",
      desc: "Cucumber, carrots, lettuce, etc.",
      pickup: "Nov 12th, 5:00pm",
      price: 15,
      retail_price: 30,
      food_img:
        "https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "Second Harvest"
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Fruits (20lbs)",
      desc: "Apple, bananda, pear, etc.",
      pickup: "Nov 14th, 10:30am",
      price: 12,
      retail_price: 25,
      food_img:
        "https://images.pexels.com/photos/1187300/pexels-photo-1187300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "Breakfast Club of Canada"
    },
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Pasteries (10lbs)",
      desc: "Muffins, cookies, bread, scones, etc.",
      pickup: "Nov 13th, 7:30pm",
      price: 8,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
      npo_name: "Food Banks Canada"
    },
  ];

  /*put the data array here for the items in the drawer*/

  return (
    <div>
      <div className="collapse bg-base-200 mr-10 ml-10 mt-40 w-auto">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-black">
          Click to see your confirmed orders
        </div>

        <div className="collapse-content">
          <div className="carousel gap-4">
            {data2.map((item, index) => (
              <div key={index}>
                <div className="card card-compact w-48 bg-base-100 carousel-item p-0 w-48 h-72">
                  <figure className="">
                    <img src={item.food_img} alt="Food" />
                  </figure>
                  <div className="card-body">

                    <h2 className="card-title text-sm text-black">
                      {item.type}
                      <div className="badge badge-accent badge-sm">
                        ${item.price}
                      </div>
                      <div className="badge badge-ghost badge-sm line-through">
                        ${item.retail_price}
                      </div>
                    </h2>
                    <p className="text-sm text-left">
                      <span className="font-bold text-sm">Pick up by:</span>
                      {item.npo_name}
                    </p>
                    <div className="h-16 overflow-hidden">
                      <p className="overflow-ellipsis text-sm text-left">
                        {item.desc}
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <label
                        htmlFor="my_modal_6"
                        className="btn btn-primary btn-sm"
                      >
                        Check Info
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_6"
                        className="modal-toggle"
                      />
                      <div className="modal modal-middle">
                        <div className="modal-box justify-center pr-0 pl-0 pt-0 max-w-xl">
                          <figure className="h-48 w-full">
                            <img
                              className="rounded object-contain"
                              src={item.food_img}
                            />
                          </figure>
                          <div className="flex m-10 no-flex">
                            <div className="w-72 pr-8">
                              <h1 className="text-3xl font-bold text-left">
                                {item.type}
                              </h1>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Pick up by:</span>
                                {item.npo_name}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">
                                  Pick up before:
                                </span>{" "}
                                {item.pickup}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">Price: $</span>{" "}
                                {item.price}
                              </p>
                              <p className="text-left text-black pt-2 pb-2">
                                <span className="font-bold">
                                  Retail Price: $
                                </span>{" "}
                                {item.retail_price}
                              </p>
                            </div>
                            <div className="text-left">
                              <p className="font-bold">Description:</p>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                          <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn mr-4">
                              Close!
                            </label>
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
                <div className="modal-box justify-center max-w-4xl text-black">
                  <div className="flex no-flex">
                    <div className="p-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Enter your listing name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter price</span>
                        </label>
                        <input
                          type="number"
                          placeholder="$0.00"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Enter retail price</span>
                        </label>
                        <input
                          type="number"
                          placeholder="$0.00"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Enter pickup before date
                          </span>
                        </label>
                        <input
                          type="date"
                          placeholder="$0.00"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">

                          <span className="label-text">
                            Enter pickup before time{" "}
                          </span>
                        </label>
                        <input
                          type="time"
                          placeholder="$0.00"
                          className="input input-bordered"
                        />
                      </div>
                    </div>
                    <div className="text-left p-4 pl-8 w-full">
                      <h2 className="pb-4">
                        Enter a description for your listing
                      </h2>
                      <div className="form-control">
                        <textarea
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered p-8 h-80"
                        />
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
                    <label
                      htmlFor="my_modal_7"
                      className="btn btn-primary btn-sm"
                    >
                      Check Info
                    </label>
                    <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle"
                    />
                    <div className="modal modal-middle">
                      <div className="modal-box justify-center pr-0 pl-0 pt-0 max-w-xl">
                        <figure className="h-48 w-full">
                          <img
                            className="rounded object-contain"
                            src={item.food_img}
                          />
                        </figure>
                        <div className="flex m-10 no-flex">
                          <div className="w-72 pr-8">

                            <h1 className="text-3xl font-bold text-left">
                              {item.type}
                            </h1>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Pick up by: </span>
                              {item.npo_name}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Pick up time: </span>
                              {item.pickup}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Price: </span>
                              {item.price}
                            </p>
                            <p className="text-left text-black pt-2 pb-2">
                              <span className="font-bold">Retail Price: </span>
                              {item.retail_price}
                            </p>
                          </div>
                          <div className="text-left">
                            <p class="font-bold">Description:</p>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="my_modal_7" className="btn mr-4">
                            Close!
                          </label>
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
