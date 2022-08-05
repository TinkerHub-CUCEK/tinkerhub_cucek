import logo1 from "../assets/logo1.png"

function Header() {
    return (
        <div>
            <div className="text-light">
                <img src={logo1} alt="tinkerhub"></img><p style={{ fontSize: "70px" }}>Tinker<span style={{ fontWeight: "300" }}>Hub</span></p><span style={{ fontSize: "40px", fontWeight: "300" }}>CUCEK</span>
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