const Test2 = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <h2>This is the {announceUppercase(props.instance)} of my Test2 component!</h2>
        </>
    )
}

export default Test2;