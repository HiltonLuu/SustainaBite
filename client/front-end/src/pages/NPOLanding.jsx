import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import data from "./BusinessData"


export default function NPOLanding() {

  return (
    <div>
      <div>
        <h1 className="text-left">Order Near You...</h1>
        <div className="flex">
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
          <p>2500 University Dr NW, Calgary, T2N 1N4 • Now</p>
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
        <div className="text-left">
          <h2>
            <b>All Stores</b>
          </h2>
          <h2>
            <b>Sort</b>
          </h2>
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
                    <b>${item.price}</b>
                  </p>
                  <Link to={`/not-for-profit/request/${index}`} className="btn btn-primary">Reserve</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
