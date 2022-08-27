import OfferItems from "./OfferItems";

const TenantOffers = () => {
    const tenant_test = [
        {
            id_offer: 1,
            address: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            amount: 20,
            frequency: 10,
            comments: "Hola que tal"
        },
        {
            id_offer: 2,
            address: "0xEECcAbB9f1dC20E7DdA7b4aEdDCFeB0897147931",
            amount: 20,
            frequency: 10,
            comments: "Hola que tal"
        },
        {
            id_offer: 3,
            address: "0xF5C95f505ddeaB262F2ceE79dAC606468F2661b2",
            amount: 20,
            frequency: 10,
            comments: "Hola que tal"
        },
        {
            id_offer: 4,
            address: "0xEECcAbB9f1dC20E7DdA7b4aEdDCFeB0897147931",
            amount: 20,
            frequency: 10,
            comments: "Hola que tal"
        },
    ];  

    return(
        <div>
            <h1 className="py-6 text-center text-3xl">Tenant Offers</h1>
            <ul className="px-24 py-8">
                {
                    tenant_test.map((item) => (
                        <OfferItems key={item.id_offer} address={item.address} amount={item.amount} frequency={item.frequency} comments={item.comments}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default TenantOffers;