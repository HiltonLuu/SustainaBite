import { useEffect, useState } from "react";
import "../App.css";

export default function NPOLanding() {
  const data = [
    {
      name: "Cool Hotel",
      location: "123 Real Address",
      type: "Cooked Yams (5lbs)",
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
      pickup: "Nov 13th, 8:00pm",
      price: 10,
      retail_price: 20,
      food_img:
        "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
      company_img:
        "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg",
    },
  ];

  return (
    <div className="mt-20">

      <div className="pl-10 pt-20 pb-5">
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
                className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search"
                type="search"
                autoFocus=""
                value=""
              />
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex mt-10">

        <div className="text-left text-black w-96 pl-10">
            <p>
                <b>All Stores</b>
            </p>
            <p>
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

        <div className="grid grid-cols-2 gap-10">
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
