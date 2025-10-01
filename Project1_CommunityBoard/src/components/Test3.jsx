const Test3 = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <h1>This is the {announceUppercase(props.instance)} of my Test2 component!</h1>
        </>
    )
}

export default Test3;