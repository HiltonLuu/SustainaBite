import { Link, useParams } from "react-router-dom"
import data from "./BusinessData"


export default function NPOPay() {

    const { id } = useParams()

    return <div className="w-1/2 mx-auto bg-base-100 h-full rounded-md p-8 flex flex-col gap-4 text-left">
        <h1 className="text-4xl text-left">Payment</h1>
        <h2 className="text-black">Price: <p>${data[id].price}</p></h2>

        <div className="flex justify-around">
            <Link to={"/not-for-profit"} className="btn btn-primary">Cancel</Link>
            <Link to={"/not-for-profit"} className="btn btn-primary">Confirm</Link>
        </div>
    </div>
}