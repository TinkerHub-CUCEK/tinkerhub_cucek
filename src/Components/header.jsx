import logo1 from "../assets/logo1.png"
import main_logo from "../assets/main_logo.png"

function Header() {
    return (
        <div>
            <div className="text-light">
                <img style={{maxWidth: "75vw"}} src={ main_logo } alt="main_logo" />
            </div>

            <div className="text-light intro">
                ~intro <br />
                <b style={{ fontSize: "24px" }}>Learning on our own and from peers.</b> <br />
                <p style={{ fontSize: "16px" }}>We are community of tinkerers, makers, policy geeks & students and are working towards mapping and empowering people who share a passion to innovate.</p>
            </div>
        </div>
    )
}

export default Header