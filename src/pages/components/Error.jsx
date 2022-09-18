// Error Management

import { Button } from "../components/components";

const Error = (props) => {
    return (props.trigger) ?
    ""
        :
    (
        <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-zinc-900 text-white p-4 rounded-lg text-center">
                Error Management
            </div>
        </div>
    );
}

export default Error;