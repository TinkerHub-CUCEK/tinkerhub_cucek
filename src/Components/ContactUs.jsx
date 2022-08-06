import location from "../assets/location.png"
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import "../styles/contact_us.css"
import { Form } from "react-bootstrap"


function ContactUs() {
    return (
        <div id="contact" style={{ backgroundColor: "#242734" }}>
            <div className="container text-light">
                <h1 className="text-light">Contact <span className="title2">Us</span></h1>
                <div>
                    <hr />
                    <div className="contact-detail">
                        <img src={location} alt="loc" />
                        <h3>CUCEK</h3><span style={{ fontSize: "18px", fontWeight: "700" }}>Alapuzha, India</span>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="pho" />
                        <h3>+919072048028</h3>
                    </div>
                    <div className="contact-detail">
                        <img src={mail} alt="mail" />
                        <h3>tinkerhubcucek@gmail.com</h3>
                    </div>
                </div>
                <hr />
                <div className="card bg-dark text-light">
                    <div className="card-header">
                        <h2>Use the form below to contact us</h2>
                    </div>
                    <form className="card-body" action="" method="post">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <textarea className="form-control" type="text" placeholder="message"></textarea>
                        </Form.Group>
                        <Form.Group>
                            <br />
                            <input style={{width: "100%"}} type="submit" className="btn btn-secondary"></input>
                        </Form.Group>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ContactUs