import { useEffect, useState } from "react";
import "../App.css";

export default function MakeDonations() {
  
    const data = [
        {
            name: "The Mustard Seed",
            about: "The Mustard Seed is a Christian non-profit organization that has been caring for individuals experiencing homelessness and poverty since 1984.",
            company_img:
                "https://theseed.ca/images/mustard-seed-og-image.jpg",
        },
        {
            name: "Food Banks Canada",
            about: "Food Banks Canada is a national organization that represents and supports the food bank community across the country. They work to alleviate hunger by providing food and resources to those in need.",
            company_img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Food_Banks_Canada_logo.svg/1200px-Food_Banks_Canada_logo.svg.png",
        },
        {
            name: "Second Harvest",
            about: "Second Harvest is the largest food rescue organization in Canada. They collect surplus, unsold food and redistribute it to a network of agencies that serve people experiencing hunger.",
            company_img:
                "https://communitywire.ca/wp-content/uploads/sites/3/2023/04/Second-Harvest-featured.jpg",
        },
        {
            name: "Breakfast Club of Canada",
            about: "The Breakfast Club of Canada is dedicated to ensuring every child has access to a nutritious breakfast. They work with schools and communities across the country to provide healthy meals to children.",
            company_img:
                "https://www.breakfastclubcanada.org/wp-content/uploads/2021/05/BCC_LOGO_HZ_FC_POS_CMYK_TM_EN1.jpg",
        },
        {
            name: "Community Food Centres Canada",
            about: "Community Food Centres Canada works to build health, belonging, and social justice in low-income communities by offering food programs, education, and engagement initiatives.",
            company_img:
                "https://images.squarespace-cdn.com/content/v1/56be2ddfb654f9af652dc0e5/1479546621019-NGMR8FWWDJ89S2HQTQXZ/image-asset.gif",
        },
        {
            name: "Community Food Centres Canada",
            about: "Community Food Centres Canada works to build health, belonging, and social justice in low-income communities by offering food programs, education, and engagement initiatives.",
            company_img:
                "https://images.squarespace-cdn.com/content/v1/56be2ddfb654f9af652dc0e5/1479546621019-NGMR8FWWDJ89S2HQTQXZ/image-asset.gif",
        },
    ];


    return (

        <div className="m-20">

            <div className="grid grid-cols-3 gap-10">
                {data.map((company, index) => (
                    <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl p-0">
                    <figure className="h-48 w-auto">
                        <img className="object-contain"
                        src={company.company_img}
                        alt="Company Logo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">{company.name}</h2>
                        <p className="text-left">{company.about}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>

    );
}