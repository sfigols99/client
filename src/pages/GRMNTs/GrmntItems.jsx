import { Link } from "react-router-dom";

const GrmntItems = (props) => {
    return(
        <li className="py-4 border-t last:border-b grid-container grid grid-cols-7">
            <Link to={"rents/"+props.id_rent}>
                <div className="flex justify-center items-center pr-20 col-span-6">
                    <h1 className="text-xl">
                        <span className="px-8">
                            {props.tenant}
                        </span>
                        <span className="px-8">
                            {props.landlord}
                        </span>
                    </h1>
                </div>
                <div className="p-2 pr-8 col-span-6">
                    <h3 className="text-right">Quantity: {props.amount} ETH</h3>     
                    <h3 className="text-right">Frequency: {props.frequency} DAYS</h3>
                </div>
            </Link>
        </li>
    )
}

export default GrmntItems;