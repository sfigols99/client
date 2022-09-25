// Error Management
const Error = (props) => {
    return (
        <div className="flex justify-center items-center py-20 text-3xl">
            {props.error}
        </div>
    );
}

export default Error;