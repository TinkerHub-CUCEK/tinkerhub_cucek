import qrcode from "../assets/qrcode.png"
import aboutus from "../assets/aboutus.png"
import Card from 'react-bootstrap/Card';
import "../styles/aboutus.css"


function AboutUs() {
  return (
    <Card className="text-center text-light" style={{ backgroundColor: "#242734" }}>
      <Card.Body>
        <div style={{ display: "block" }}>
          <div class="left">
            <img className="phone" src={qrcode} alt="" />
          </div>
          <div class="right">
            <br />
            <img src={aboutus} alt="about us"></img>
            <h2>About <span class="text-warning">Us</span></h2>
            <p class="about-text">
              TinkerHub CUCEK is a Campus Community initiative of tinkerhub at Cochin University College of Engineering Kuttanad. We equip the students with technical skills and non technical skills and aim to fulfill the mission and vision of TinkerHub.
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutUs;