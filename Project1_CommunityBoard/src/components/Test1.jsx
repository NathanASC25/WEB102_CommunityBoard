const Test1 = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <h3>This is the {announceUppercase(props.instance)} of my Test1 component!</h3>
        </>
    )
}

export default Test1;