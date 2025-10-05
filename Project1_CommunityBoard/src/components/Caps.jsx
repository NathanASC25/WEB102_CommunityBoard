const Caps = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <div className={props.className}>
                <span>{announceUppercase(props.instance)}</span>
            </div>
        </>
    );
};

export default Caps;