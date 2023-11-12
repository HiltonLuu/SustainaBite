import { Link, useParams } from "react-router-dom"
import data from "./BusinessData"

export default function NPORequest() {

    const { id } = useParams()

    return <div className="w-[60%] mx-auto bg-base-100 h-full rounded-md p-8 flex flex-col gap-4">
        <div className="flex gap-8">
            <figure className="h-auto w-1/2">
                <img
                    className="object-contain rounded-md"
                    src={data[id].food_img}
                    alt="Food"
                />
            </figure>
            <div className="flex flex-col ">
                <div className="flex">
                    <img
                        className="rounded-full h-16 w-16"
                        src={data[id].company_img}
                        alt="Profile Picture"
                    />
                    <div className="pl-5">
                        <h2 className="card-title text-black">{data[id].name}</h2>
                        <p className="text-left">{data[id].location}</p>
                        <p className="text-left">{data[id].type}</p>
                        <p className="text-left">Pickup by: {data[id].pickup}</p>
                    </div>
                </div>
                <Link to={`/not-for-profit/order/${id}`} className="btn my-auto">
                    Request
                </Link>
            </div>
        </div>
        <div className="flex gap-8 w-1/2">
            <div className="text-black text-left">
                <h2>Food list:</h2>
                <ul>
                    <li><p>{data[id].type}</p></li>
                </ul>
            </div>
            <div className="text-black text-left">
                <h2>Pickup window:</h2>
                <p className="text-left">{data[id].location}</p>
            </div>
        </div>
    </div>
}