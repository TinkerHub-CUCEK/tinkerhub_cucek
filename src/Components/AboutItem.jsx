
function AboutItem(props) {
    return (
        <div>
            <img src={props.icon} alt="about us"></img>
            <h2>{props.title} <span className="text-warning">{props.title2}</span></h2>
            <p className="about-text">
                { props.children }
            </p>
            <br />
        </div>
    )
}

export default AboutItem