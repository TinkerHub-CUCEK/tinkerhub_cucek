import { db } from "../Firebase"
import { useEffect, useState } from "react"
import "../styles/events.css"
import { collection, query, onSnapshot } from "firebase/firestore"
import CardGroup from "./CardGroup"


function Events() {

    const [upcomingEvents, setUpcomingEvents] = useState([{ "title": "test" }])
    const [pastEvents, setPastEvents] = useState([])
    const [queryDone, setQueryDone] = useState(false)

    useEffect(() => {
        var tempUEvents = []
        var tempPEvents = []
        if (!queryDone) {
            const q = query(collection(db, "events"));
            onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach(element => {
                    // let id = element.id
                    let data = element.data()
                    if (data.type === "upcoming") {
                        tempUEvents = [...tempUEvents, data]
                    }
                    else if (data.type === "past") {
                        tempPEvents = [...tempPEvents, data]
                    }

                    setUpcomingEvents(tempUEvents)
                    setPastEvents(tempPEvents)
                });
            });
            setQueryDone(true)
        }

    }, [])




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
                <CardGroup />
                <br />
                <br />
                <h1 className="text-light">Past <span className="title2">Events</span></h1>
                <CardGroup />
                <hr />
            </div>
        </div>
    )
}

export default Events