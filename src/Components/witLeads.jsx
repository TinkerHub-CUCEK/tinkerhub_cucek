import TeamCards from "./TeamCards"

import dinasree from "../assets/team/dinasree.jpg"
import ashika from "../assets/team/ashika.jpg"
import stephy from "../assets/team/stephy.jpeg"

function WitLeads() {

    const leads = [
        {
            "name": "DINASREE P",
            "photo": dinasree
        },
        {
            "name": "STEPHY AS",
            "photo": stephy,
        },
        {
            "name": "ASHIKA MANOHAR",
            "photo": ashika
        }
    ]

    return (
        <div style={{ backgroundColor: "#242734" }}>
            <div  className="container">
                <br />
                <div>
                    <h2 style={{ display: "table", margin: "0 auto" }} className="text-light">WIT Leads</h2>
                    <br />
                </div>
                <TeamCards members={leads} />
                <br />
            </div>
        </div>
    )
}

export default WitLeads