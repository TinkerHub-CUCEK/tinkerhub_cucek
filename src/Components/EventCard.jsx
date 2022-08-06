import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function EventCard(props) {
    return (
        <>
            <Col>
                <Card className='bg-dark text-light'>
                    <Card.Img variant="top" src={props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )
}


export default EventCard