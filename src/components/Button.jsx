const Button = (props) => {
    return(
        <div className={props.genericClass}>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 ronded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                </div>
                <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center" onClick={props.onClick}>
                    {props.icon}
                    <span className="pr-6 text-gray-100">
                        {props.connButtonText}
                    </span> 
                </button>
            </div>
        </div>
    );
}

export default Button;