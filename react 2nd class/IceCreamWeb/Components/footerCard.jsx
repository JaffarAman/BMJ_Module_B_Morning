const FooterCard = (props) => {
    console.log(props)
    return (
        <div className="footerCard">
            <p style={{ color: "white" }} className={props.icon}></p>
            <p> {props.value} </p>
        </div>
    )
}

export default FooterCard