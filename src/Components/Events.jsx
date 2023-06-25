import { baseUrl } from "../config"
import { useEffect, useState } from "react"
import "../styles/events.css"
import CardGroup from "./CardGroup"


function Events() {

    const [upcomingEvents, setUpcomingEvents] = useState([{ "title": "test" }])
    const [pastEvents, setPastEvents] = useState([])
    const [queryDone, setQueryDone] = useState(false)

    const fetchPastEvents = () => {
        var tempPEvents = []
        if (!queryDone) {
            fetch(`${baseUrl}/databases/(default)/documents/events/`)
                .then(
                    (resp) => {
                        resp.json().then(
                            (val) => {
                                var past = []
                                var upcoming = []
                                for (var i = 0; i < val.documents.length; i++) {
                                    if (val.documents[i].fields.type.stringValue === "upcoming") {
                                        upcoming.push(
                                            {
                                                title: val.documents[i].fields.title.stringValue,
                                                description: val.documents[i].fields.description.stringValue,
                                                type: val.documents[i].fields.type.stringValue,
                                                image_url: val.documents[i].fields.image_url.stringValue
                                            }
                                        )
                                    }
                                    else{
                                        past.push(
                                            {
                                                title: val.documents[i].fields.title.stringValue,
                                                description: val.documents[i].fields.description.stringValue,
                                                type: val.documents[i].fields.type.stringValue,
                                                image_url: val.documents[i].fields.image_url.stringValue
                                            }
                                        )
                                    }
                                }
                                setPastEvents(past)
                                setUpcomingEvents(upcoming)
                            }
                        )
                    }
                )
        }
    }

    useEffect(() => {
        var tempUEvents = []
        fetchPastEvents()
    }

        , [queryDone])




    return (
        <div id="events" style={{ backgroundColor: "#1D1F27" }}>
            <div className="container">
                <br />
                <br />
                <h1 className="text-light">Upcoming <span className="title2">Events</span></h1>
                <hr />
                {/* {upcomingEvents.map((item)=>{
                    return(
                        item.title
                    )
                })} */}
                <CardGroup events={upcomingEvents} />
                <br />
                <br />
                <h1 className="text-light">Past <span className="title2">Events</span></h1>
                <CardGroup events={pastEvents} />
                <br />
            </div>
        </div>
    )
}

export default Events