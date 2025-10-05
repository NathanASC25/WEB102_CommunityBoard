const Card = (props) => {
    let announceUppercase = (text) => {
        return text.toUpperCase();
    }
    return (
        <>
            <div class={props.Styling}>
                <img src={props.ImgSource}/>
                <h1>{props.ShellType}</h1>
                <h5>{props.FullName}</h5>
            </div>
        </>
    )
}

export default Card;