import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_rent_params, pay_rent, pay_surety, cancel_contract, surety_back } from "../utils/Rent";
import { Button, Navbar } from '../components/components';
import { get_transactions } from "../utils/Transactions";
// import { UserComp } from '../App/app';
// import { load } from "../utils/Auth";
// import { get_pfisica, is_persona_fisica } from "../utils/Persona_Fisica";
// import { get_pjuridica, is_persona_juridica } from "../utils/Persona_Juridica";

const RentAction = (props) => {
    return(
        <div>
            {
            (props.condition)
            ?
                <div className="p-5">
                    <Button text={props.text} onClick={props.onClick}/>
                </div> 
            :
                ""
        }
        </div>
    )    
}

const Rent = (props) => {
    const {id_rent} = useParams();
    
    const [rent, setRent] = useState( {
        tenant: "",
        landlord: "",
        frequency: "",
        last_payment: "",
        contract_end: "",
        amount: "",
        state: "",
        extension: "",
        surety: ""
    });

    const [transactions, setTransactions] = useState ([]);

    const payment_handler = async(id_rent, message) => {
        try{
            await pay_rent(id_rent, message);
        } catch (error) {
            console.log(error.reason)
        }
    }

    const surety_payment_handler = async(id_rent, message) => {
        try {
            await pay_surety(id_rent, message);
        } catch (error) {
            console.log(error.reason)
        }
    }

    const cancel_handler = async(id_rent) => {
        try {
            await cancel_contract(id_rent);
        }
        catch (error) {
            console.log(error.reason);
        }
    }

    const surety_back_handler = async(id_rent, accepted, message) => {
        try {
            await surety_back(id_rent, accepted, message);
        } catch (error) {
            console.log(error.reason);
        }
    }

    const handle_rent = () => {
        get_rent_params(Number(id_rent))
            .then(rent_items => setRent(rent_items))
    }

    const handle_transactions = () => {
        get_transactions(Number(id_rent))
            .then(t_items => setTransactions(t_items));
    }

    const get_state = (state) => {
        if(state === 0) {
            return("Surety Pending...");
        }
        else if(state === 1 || state === 2) {
            return("Started. ");
        }
        else if(state === 3) {
            return("Contract ended, waiting surety approval by landlord. ")
        }
        else if(state === 4) {
            return("Ended. :)")
        }
    }

    // const [pf, setPf] = useState();
    // const [user, setUser] = useState([]);
    // const [userAccount, setUserAccount] = useState("");

    // const handle_user = async() => {
    //     const account = await load();
    //     if (account === rent.landlord.toLowerCase()) {
    //         setUserAccount(rent.tenant.toLowerCase())
    //     } else if(account === rent.tenant.toLowerCase()) {
    //         setUserAccount(rent.landlord.toLowerCase());
    //     }
    //     let persona;
    //     if (await is_persona_fisica(userAccount)) {
    //         setPf(true);
    //         persona = await get_pfisica(userAccount);
    //         setUser(persona);
    //     } else if(await is_persona_juridica(userAccount)) {
    //         setPf(false);
    //         persona = await get_pjuridica(userAccount);
    //         setUser(persona);
    //     }
    // }

    // tenim rent

    useEffect(() => {
        handle_rent();
        handle_transactions();
        // handle_user();
    }, []);

    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="bg-black text-white flex-initial min-h-screen">
                <div className="flex justify-center items-center py-10">
                    <h1 className="text-5xl">
                        Rent identificator - {id_rent}
                    </h1>
                </div>
                <div className="columns-2 p-20">
                    <div className="">
                        <div>
                            <h1 className="p-2 px-10">Tenant Address: {rent.tenant}</h1>
                            <h1 className="p-2 px-10">Landlord Address: {rent.landlord}</h1>
                            <h1 className="p-2 px-10">Cadastral Register: {rent.registre_cadastral}</h1>
                            <h1 className="p-2 px-10">Payment Frequency: {rent.frequency} DAYS</h1>
                            <h1 className="p-2 px-10">Last Payment: {rent.last_payment}</h1>
                            <h1 className="p-2 px-10">Contract Duration: {rent.contract_end} MONTHS</h1>
                            <h1 className="p-2 px-10">Amount: {rent.amount} ETH</h1>
                            <h1 className="p-2 px-10">State: {get_state(rent.state)}</h1>
                            <h1 className="p-2 px-10">Surety: {rent.surety} ETH</h1>
                            <div className="flex justify-center items-center">  
                        </div>
                    </div> 
                    <div>
                        <RentAction text="Pay Rent" condition={(rent.state === 1) || (rent.state === 2)} onClick={() => payment_handler(id_rent, "Payment")}/>
                        <RentAction text="Pay Surety" condition={(rent.state === 0)} onClick={() => surety_payment_handler(id_rent, "Payment")}/>
                        <RentAction text="Cancel Contract" condition={rent.state === 1} onClick={() => cancel_handler(id_rent)}/>
                        <RentAction text="Surety Back" condition={rent.state === 3} onClick={() => surety_back_handler(id_rent, true, "Payment")}/>
                    </div>                   
                    </div>
                </div>
                <div className="px-20">
                    <h1 className="py-5 text-3xl">Transfer History</h1>
                    <ul>
                    {
                        transactions.map((t) => (
                            <div key={t.id_transfer} className="border-t last:border-b flex justify-between">
                                <h1 className="p-2 px-10">Transfer id: {t.id_transfer}</h1>
                                <h1 className="p-2 px-10">Amount: {t.amount} ETH</h1>
                                <h1 className="p-2 px-10">Message: {t.message}</h1> 
                            </div>
                        ))
                    }
                    </ul>
                </div> 
                {/* <div className="columns-2 p-20 border-t">
                    <UserComp pf={pf} user={user} userAccount={userAccount}/>
                </div> */}
            </div>
        </div>
    )
}

export default Rent;