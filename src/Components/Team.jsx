import TeamCards from "./TeamCards"

function Team() {
    return (
        <div style={{ backgroundColor: "#1D1F27" }}>
            <div  className="container">
                <br />
                <div>
                    <h3 style={{ display: "table", margin: "0 auto" }} className="text-warning">Our Team</h3>
                    <h2 style={{ display: "table", margin: "0 auto" }} className="text-light">Meet our team</h2>
                </div>
                <TeamCards />
                <br />
            </div>
        </div>
    )
}

export default Team