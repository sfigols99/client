const OurProject = () => {
    return(
        <div className="px-32 justify-center">
            <div className="flex py-4 px-12 text-5xl">
                Decentralized rents for a better living! 
            </div>
            
            <div className="py-4">
                <div className="py-8">
                    <span className="text-3xl">
                        Saving... 
                    </span>
                    <div className="py-4 text-xl divide-x divide-gray-400 grid grid-cols-3 gap-3 text-center">
                        <span className="flex flex-col">
                            Time
                        </span>
                        <span className="flex flex-col">
                            Money
                        </span>
                        <span className="flex flex-col">
                            Effort
                        </span>
                    </div>
                </div>
                <div className="py-4">
                    <span className="text-3xl">
                        Using...
                    </span>
                    <div className="group py-4 text-xl divide-x divide-gray-400 grid grid-cols-3 gap-3 text-center">
                        <span className="flex flex-col">
                            Smart Contracts
                        </span>
                        <span className="flex flex-col">
                            Web3
                        </span>
                        <span className="flex flex-col">
                            Blockchain
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProject;