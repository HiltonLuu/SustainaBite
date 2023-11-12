import { useEffect, useState } from "react";
import "../App.css";

export default function NPOLanding() {
  const data = [
    {
      name: "Route 66 Hotel",
      location: "5671 Poplar Drive",
      type: "Vegatables (30bs)",
      pickup: "Nov 14th, 6:30pm",
      price: 20,
      retail_price: 50,
      food_img:
        "https://images.pexels.com/photos/3988952/pexels-photo-3988952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
    {
      name: "Local Street Cafe",
      location: "960 Meadow Mist Lane",
      type: "Baked Goods (15bs)",
      pickup: "Nov 13th, 1:45pm",
      price: 10,
      retail_price: 30,
      food_img:
        "https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/2679323/pexels-photo-2679323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Home Sweet Home Cafe",
      location: "4658 Saffron Sunset Street",
      type: "Baked Goods (12bs)",
      pickup: "Nov 13th, 10:00am",
      price: 8,
      retail_price: 25,
      food_img:
        "https://images.pexels.com/photos/263070/pexels-photo-263070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/4819658/pexels-photo-4819658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Fish Creek Hotel",
      location: "3701 Elm Avenue",
      type: "Fruits (20bs)",
      pickup: "Nov 15th, 8:00am",
      price: 15,
      retail_price: 30,
      food_img:
        "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company_img:
        "https://images.pexels.com/photos/1569002/pexels-photo-1569002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="mt-20">

      <div className="pl-10 pt-20 pb-10">
        <h1 className="text-left">Order Near You...</h1>
        <div className="flex text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="pl-1">2500 University Dr NW, Calgary, T2N 1N4 • Now</p>
        </div>

        <div className="flex flex-1">
          <div className="w-full max-w-lg">
            <form className="mt-5 sm:flex sm:items-center">
              <input
                id="q"
                name="q"
                className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm"
                placeholder="Search"
                type="search"
                autoFocus=""
                value=""
              />
              
              <button className="btn btn-active btn-primary ml-5">Search</button>

            </form>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mb-10">

        <div className="text-left text-black w-1/4 pl-10 border-r-4">
            <p className="text-xl text-black">
                <b>All Stores</b>
            </p>
            <p className="text-base text-black mt-5">
                <b>Sort by</b>
            </p>
 
            <div class="flex mt-5">
            <input type="checkbox" className="w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
              <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-black">Recommended</label>
            </div>
            <div class="flex mt-2">
              <input type="checkbox" className="w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
              <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-black">Most popular</label>
            </div>
            <div class="flex mt-2">
              <input type="checkbox" className="w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
              <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-black">Distance</label>
            </div>
            <div class="flex mt-2">
              <input type="checkbox" className="w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
              <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-black">Price</label>
            </div>

        </div>

        <div className="grid grid-cols-2 gap-16 mx-auto">
          {data.map((item, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-xl p-0">
              <figure className="h-48 w-auto">
                <img
                  className="object-contain"
                  src={item.food_img}
                  alt="Food"
                />
              </figure>
              <div className="card-body">
                <div className="flex">
                  <img
                    className="rounded-full h-16 w-16"
                    src={item.company_img}
                    alt="Profile Picture"
                  />
                  <div className="pl-5">
                    <h2 className="card-title text-black">{item.name}</h2>
                    <p className="text-left">{item.location}</p>
                  </div>
                </div>
                <div className="text-left">
                  <p>{item.type}</p>
                  <p>Pickup by: {item.pickup}</p>
                </div>
                <div className="card-actions justify-end">
                  <p className="text-left">

                    <div className="badge badge-accent"> ${item.price}</div>
                    <div className="badge badge-ghost line-through ml-2">
                        ${item.retail_price}
                    </div>

                  </p>
                  <button className="btn btn-primary">Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
