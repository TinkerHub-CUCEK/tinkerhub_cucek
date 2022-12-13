import "bootstrap/dist/css/bootstrap.min.css"
import bg1 from "./assets/bg1.png"
import NavBar from "./Components/navBar"
import "./styles/index.css"
import SocialIcons from "./Components/socialIcons"
import Header from "./Components/header"
import JoinButton from "./Components/Join"
import AboutUs from "./Components/AboutUs"
import Events from "./Components/Events"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"
import Team from "./Components/Team"
import WitLeads from "./Components/witLeads"

function App() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg1})`, width: "100%", backgroundSize: "100%" }}>
        <div className="container">
          <NavBar />
          <Header />
          <div style={{ height: "5px", backgroundColor: "yellow", width: "20%" }}></div>
          <br />
          <SocialIcons />
          <JoinButton />
          <br />
        </div>
        <AboutUs />
        <Events />

        <Team />
        <WitLeads />
        <ContactUs />
        <Footer />
      </div>

    </div>
  );
}

export default App;
