import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TeamCards(props) {

    return (
        <Row xs={1} md={5} className="g-4">
            {
                props.members.map(
                    (member, idx) => {
                        return (
                            <Col key={idx}>
                                <Card border='light' className="bg-dark text-light">
                                    <Card.Img variant="top" src={member.photo} />
                                    <Card.Body>
                                        <Card.Title>{member.name}  </Card.Title>
                                        <Card.Text>
                                            {member.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                )
            }
        </Row>
    );
}

export default TeamCards;