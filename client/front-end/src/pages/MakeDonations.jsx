import "../App.css";

export default function MakeDonations() {
  const data = [
    {
      name: "The Mustard Seed",
      about:
        "A non-profit organization that operates in Canada, with a mission to alleviate poverty and homelessness. They work to provide support and resources to individuals and families in need.",
      company_img: "https://theseed.ca/images/mustard-seed-og-image.jpg",
    },
    {
      name: "Food Banks Canada",
      about:
        "Food Banks Canada represents and supports the food bank community across the country. They work to alleviate hunger by providing food and resources to those in need.",
      company_img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Food_Banks_Canada_logo.svg/1200px-Food_Banks_Canada_logo.svg.png",
    },
    {
      name: "Second Harvest",
      about:
        "Second Harvest is the largest food rescue organization in Canada. They collect surplus, unsold food and redistribute it to a network of agencies that serve people experiencing hunger.",
      company_img:
        "https://communitywire.ca/wp-content/uploads/sites/3/2023/04/Second-Harvest-featured.jpg",
    },
    {
      name: "Breakfast Club of Canada",
      about:
        "The Breakfast Club of Canada is dedicated to ensuring every child has access to a nutritious breakfast. They work with schools and communities across the country to provide healthy meals to children.",
      company_img:
        "https://www.breakfastclubcanada.org/wp-content/uploads/2021/05/BCC_LOGO_HZ_FC_POS_CMYK_TM_EN1.jpg",
    },
    {
      name: "Community Food Centres Canada",
      about:
        "Community Food Centres Canada works to build health, belonging, and social justice in low-income communities by offering food programs, education, and engagement initiatives.",
      company_img:
        "https://images.squarespace-cdn.com/content/v1/56be2ddfb654f9af652dc0e5/1479546621019-NGMR8FWWDJ89S2HQTQXZ/image-asset.gif",
    },
    {
      name: "Daily Bread Food Bank",
      about:
        "Daily Bread Food Bank is a non-profit organization based in Toronto, Canada, that focuses on alleviating hunger and providing food support to individuals and families experiencing poverty.",
      company_img:
        "https://mma.prnewswire.com/media/1220980/Daily_Bread_Food_Bank_Daily_Bread_Food_Bank_Study_Reveals_Food_I.jpg?p=facebook",
    },
  ];

  return (
    <div className="mt-40 mb-10">
      <div className="grid grid-cols-3 gap-10 place-items-center">
        {data.map((company, index) => (
          <div
            key={index}
            className="card card-compact w-96 bg-base-100 shadow-xl p-0"
          >
            <figure className="h-48 w-auto">
              <img
                className="object-contain"
                src={company.company_img}
                alt="Company Logo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">{company.name}</h2>
              <p className="text-left">{company.about}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Donate
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box max-w-2xl">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                        ✕
                      </button>
                    </form>
                    <h1>Make a donation!</h1>
                    <div className="flex m-10 no-flex">
                      <div className="flex-1 align-top">
                        <figure className="">
                          <img
                            className="rounded object-contain"
                            src={company.company_img}
                          />
                        </figure>
                        <p>{company.about}</p>
                      </div>
                      <div className="flex-1 align-top p-4 items-center text-black">
                        <div className="flex gap-4">
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">First Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">Last Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full max-w-xs"
                            />
                          </div>
                        </div>
                        <div className="form-control w-full max-w-xs pb-4">
                          <label className="label">
                            <span className="label-text">
                              Amount to donate:{" "}
                            </span>
                          </label>
                          <input
                            type="number"
                            placeholder="$0.00"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </div>
                        <button
                          className="btn"
                          onClick={() => {
                            document.getElementById("my_modal_3").close();
                          }}
                        >
                          {" "}
                          Confirm{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
