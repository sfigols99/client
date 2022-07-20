import GrmntItems from "./GrmntItems";

const Rents = () => {
    const rent_example = [
        {
            id_rent: 1,
            tenant: "0x843F43bFFE3747eE371704baE907B3296952B45e",
            landlord: "0xEECcAbB9f1dC20E7DdA7b4aEdDCFeB0897147931",
            frequency: 30,
            amount: 2,
        },
        {
            id_rent: 2,
            tenant: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            landlord: "0x843F43bFFE3747eE371704baE907B3296952B45e",
            frequency: 40,
            amount: 1,
        },
        {
            id_rent: 3,
            tenant: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            landlord: "0xEECcAbB9f1dC20E7DdA7b4aEdDCFeB0897147931",
            frequency: 20,
            amount: 10,
        },
        {
            id_rent: 4,
            tenant: "0x843F43bFFE3747eE371704baE907B3296952B45e",
            landlord: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            frequency: 10,
            amount: 2,
        },
        {
            id_rent: 5,
            tenant: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            landlord: "0xEECcAbB9f1dC20E7DdA7b4aEdDCFeB0897147931",
            frequency: 10,
            amount:200,
        },
    ];

    return(
        <div>
            <h1 className="py-6 text-center text-3xl" >GRMNT's</h1>
            <ul className="px-24 py-8">
                {
                    rent_example.map((input) => (
                        <GrmntItems 
                            key={input.id_rent} 
                            tenant={input.tenant} 
                            landlord={input.landlord} 
                            frequency={input.frequency} 
                            amount={input.amount}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Rents;