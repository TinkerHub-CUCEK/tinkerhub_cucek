import SocialIcons from "./socialIcons"
import full_logo from "../assets/full_logo.png"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/footer.css"
import location from "../assets/location.png"


function Footer() {
    return (
        <div className="bg-dark">
            <Container>
                <Row className="text-light p-3">
                    <Col className="col1 d-none d-md-block">
                        <img style={{ width: "75%" }} src={full_logo} alt="tinkerhub cucek" />
                        <br />
                        <br />
                        <h3>
                            Social Connect
                        </h3>
                        <hr style={{ color: "yellow" }} />
                        <SocialIcons />
                    </Col>
                    <Col style={{ textAlign: "center" }} className="col2">
                        <h3>
                            Main Links
                        </h3>
                        <br />
                        <br />
                        <a style={{ textDecoration: "none" }} className="text-light" href="#about">About us</a>
                        <br /><br />
                        <a style={{ textDecoration: "none" }} className="text-light" href="#events">Events</a>
                        <br /> <br />
                        <a style={{ textDecoration: "none" }} className="text-light" href="#contact">Contact</a>
                    </Col>
                    <Col style={{ textAlign: "center" }} className="col3 d-none d-md-block">
                        <h3>
                            Get in touch
                        </h3>
                        <div className="contact-detail">
                            <img src={location} alt="loc" />
                            <h3>CUCEK</h3><span style={{ fontSize: "18px", fontWeight: "700" }}>Alapuzha, India</span>
                        </div>
                        <a className="btn btn-warning" href="#contact">Contact us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer