
//import { useState, useEffect } from "react";

import { get_requests } from "../utils/Offer";

const Requests = () => {

    get_requests(0)

    return(
        <div>
            <h1 className="py-6 text-center text-3xl" >GRMNT's</h1>
            <ul className="px-24 py-8">
                <li>
                    Hola
                </li>
            </ul>
        </div>
    )
}

export default Requests;