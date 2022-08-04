import logo1 from "../assets/logo1.png"

function Header() {
    return (
        <div>
            <br />
            <div className="text-light">
                <img src={logo1} alt="tinkerhub"></img><h1><b>Tinker</b>Hub<br />CUCEK</h1>
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