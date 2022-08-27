const No_Metamask = (props) => {
    return (props.trigger) ?
    ""
        :
    (
        <h1>Metamask is not Installed</h1>
    );
}

export default No_Metamask;