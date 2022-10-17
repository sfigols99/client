const UserComp = (props) => {
    return(
        <div className="text-white p-20">
            {
                props.pf ?
                <div>
                    <h1 className="p-3">Address: {props.userAccount}</h1>
                    <h1 className="p-3">DNI: {props.user["0"]}</h1>
                    <h1 className="p-3">Name: {props.user["1"]}</h1>
                    <h1 className="p-3">Location: {props.user["2"]}</h1>
                    <h1 className="p-3">Email: {props.user["3"]}</h1>
                </div>
                :
                <div>
                    <h1 className="p-3">Address: {props.userAccount}</h1>
                    <h1 className="p-3">NIF: {props.user["0"]}</h1>
                    <h1 className="p-3">Social Denomination: {props.user["1"]}</h1>
                    <h1 className="p-3">Location: {props.user["2"]}</h1>
                    <h1 className="p-3">Email: {props.user["3"]}</h1>
                    <h1 className="p-3">Administrator: {props.user["4"]}</h1>
                </div>
            }
        </div>
    )
}

export default UserComp;