const Test3 = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <h1>Hello! This is the {announceUppercase(props.instance)} of Test 3!</h1>
        </>
    )
}

export default Test3;