const SmallerCaps = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <div class={props.className}>
                <h2>{announceUppercase(props.instance)}</h2>
            </div>
        </>
    )
}

export default SmallerCaps;