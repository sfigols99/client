// Error Management
const Error = (props) => {
    return (
        (props.toggle) ?
        <div className="flex justify-center items-center py-20 text-3xl text-red-500">
            ERROR
        </div>
        :
        ""
    );
}

export default Error;