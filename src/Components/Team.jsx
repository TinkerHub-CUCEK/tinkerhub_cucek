import TeamCards from "./TeamCards"

import arjun from "../assets/team/arjun.jpeg"
import anu from "../assets/team/anu.jpeg"
import riya from "../assets/team/riya.jpg"
import dhilshad from "../assets/team/dhilshad.jpg"
import abhijith from "../assets/team/abhijith.jpg"

function Team() {
    const teamMembers = [
        {
            "name": "ABHIJITH RAM",
            "photo": abhijith,
            "title": "TECH LEAD"
        },
        {
            "name": "ANU FASMIN",
            "photo": anu,
            "title": "CO LEAD"
        },
        {
            "name": "ARJUN V",
            "photo": arjun,
            "title": "CAMPUS LEAD"
        },
        {
            "name": "RIYA ROSE JAMES    ",
            "photo": riya,
            "title": "CREATIVE LEAD"
        },
        {
            "name": "DHILSHAD PA",
            "photo": dhilshad,
            "title": 'Media Lead'
        }
    ]
    return (
        <div style={{ backgroundColor: "#242734" }}>
            <div className="container">
                <br />
                <div>
                    <h3 style={{ display: "table", margin: "0 auto" }} className="text-warning">Our Team</h3>
                    <h2 style={{ display: "table", margin: "0 auto" }} className="text-light">Meet our team</h2>
                </div>
                <TeamCards members={teamMembers} />
                <br />
            </div>
        </div>
    )
}

export default Team