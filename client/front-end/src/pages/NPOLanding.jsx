import { useEffect, useState } from "react";
import "../App.css";

export default function App() {

  return (
  <div>
    <div>
        <h1 className="text-left">Order Near You...</h1>
        <div className="flex">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <p>2500 University Dr NW, Calgary, T2N 1N4 • Now</p>

        </div>

        <div class="flex flex-1">
            <div class="w-full max-w-lg">
                <form class="mt-5 sm:flex sm:items-center">
                    <input id="q" name="q" className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" autofocus="" value=""/>
                    <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
                </form>
            </div>
        </div>
    </div>

    <div className="flex">
      <div className="text-left">
        <h2><b>All Stores</b></h2>
        <h2><b>Sort</b></h2>
      </div>
      
      <div className="flex">

        <div className="card w-96 bg-base-100 shadow-xl p-0 m-5">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg" alt="Food" /></figure>
            <div className="card-body">
                <div className="flex">
                    <img className="rounded-full h-16 w-16" src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg" alt="Profile Picture"/>
                    <div className="pl-5">
                        <h2 className="card-title">Business Name</h2>
                        <p className="text-left">Location: ...</p>
                    </div>
                </div>
                <div className="text-left">
                    <p>Food Type: ...</p>
                    <p>Pickup: ...</p>
                </div>
                <div className="card-actions justify-end">
                    <p className="text-left"><b>$4.99</b></p>
                    <button className="btn btn-primary">Reserve</button>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl p-0 m-5">
            <figure className="h-48 w-auto"><img className="object-contain" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Food" /></figure>
            <div className="card-body">
                <div className="flex">
                    <img className="rounded-full h-16 w-16" src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg" alt="Profile Picture"/>
                    <div className="pl-5">
                        <h2 className="card-title">Business Name</h2>
                        <p className="text-left">Location: ...</p>
                    </div>
                </div>
                <div className="text-left">
                    <p>Food Type: ...</p>
                    <p>Pickup: ...</p>
                </div>
                <div className="card-actions justify-end">
                    <p className="text-left"><b>$4.99</b></p>
                    <button className="btn btn-primary">Reserve</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
  )

}
