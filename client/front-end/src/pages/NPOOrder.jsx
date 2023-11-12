import { Link, useParams } from "react-router-dom"
import data from "./BusinessData"


export default function NPOOrder() {

    const { id } = useParams()

    return <div className="w-1/2 mx-auto bg-base-100 h-full rounded-md p-8 flex flex-col gap-4 text-left">
        <h1 className="text-4xl text-left">Order Summary</h1>
        <h2 className="text-black">Business name: <p>{data[id].name}</p></h2>
        <h2 className="text-black">Pickup window: <p>{data[id].location}</p></h2>
        <h2 className="text-black">Food list: <p>{data[id].type}</p></h2>
        <h2 className="text-black">Price: <p>${data[id].price}</p></h2>

        <div className="flex justify-around">
            <Link to={`/not-for-profit/pay/${id}`} className="btn btn-primary">Funds</Link>
            <Link to={`/not-for-profit/pay/${id}`} className="btn btn-primary">Card</Link>
        </div>

    </div>
}