import TeamCards from "./TeamCards"


import teamMembers from '../data/team';

function Team() {
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