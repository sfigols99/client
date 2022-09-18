import { Button } from "../components/components";

const NoMetamask = (props) => {
    return (props.trigger) ?
    ""
        :
    (
        <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-zinc-900 text-white p-4 rounded-lg text-center">
                <h1 className="text-4xl p-3">Metamask is not installed. </h1>
                <p className="text-2xl">You can install it here: 
                    <a href="https://metamask.io/" target="_blank">
                        <div className="py-10">
                            <Button text="Metamask.io"/>                                
                        </div>
                    </a>
                </p>
                <p>
                    It is used for signing and verifying transactions.
                </p>
            </div>
        </div>
    );
}

export default NoMetamask;