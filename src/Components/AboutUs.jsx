import qrcode from "../assets/qrcode.png"
import aboutus from "../assets/aboutus.png"
import mission from "../assets/mission.png"
import vision from "../assets/vision.png"
import Card from 'react-bootstrap/Card';
import "../styles/aboutus.css"
import AboutItem from "./AboutItem";


function AboutUs() {
  return (
    <Card id="about" className="text-center text-light" style={{ backgroundColor: "#242734" }}>
      <Card.Body>
        <div style={{ display: "block" }}>
          <div className="left">
            <img className="phone" src={qrcode} alt="" />
          </div>
          <div className="right">
            <br />
            <AboutItem icon={aboutus} title="About" title2="us">
              TinkerHub CUCEK is a Campus Community initiative of tinkerhub at Cochin University College of Engineering Kuttanad. We equip the students with technical skills and non technical skills and aim to fulfill the mission and vision of TinkerHub.
            </AboutItem>
            <AboutItem icon={mission} title="Our" title2="Mission">
              We take a unique and innovative approach to teaching and learning that helps students collaborate with like minded peers.Our community members are given internship opportunities which gives them a better exposure and build the potentials as young professionals.
            </AboutItem>
            <AboutItem icon={vision}>
              We do not sell dreams; rather we help our members work towards them. Our vision is to help students to improve their engineering skills by providing innovative, best guidance through interactive technology and methodology and to make learning meaningful and joyful.
            </AboutItem>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutUs;