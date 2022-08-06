import Row from 'react-bootstrap/Row';
import EventCard from './EventCard';

function CardGroup(props) {
    return (
        <Row xs={1} md={3} className="g-4">
            {
                props.events.map((item, index) => {
                    return (
                        <EventCard title={item.title} description={item.description} imageUrl={item.image_url}/>
                    )
                })
            }
            {/* {Array.from({ length: 3 }).map((_, idx) => (
                <EventCard />
            ))} */}
        </Row>
    );
}

export default CardGroup;