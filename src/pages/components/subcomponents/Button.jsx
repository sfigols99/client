const Button = (props) => {
    return(
        <div className="relative group">
            <button className="py-2 px-6 border-2 bg-white rounded transition-colors duration-1000 text-black hover:text-white hover:bg-black " onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;