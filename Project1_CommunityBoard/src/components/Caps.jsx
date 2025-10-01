const Caps = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <h1>{announceUppercase(props.instance)}</h1>
        </>
    )
}

export default Caps;