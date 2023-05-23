import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import teamMembers from '../data/team';

function TeamCards() {
    
    return (
        <Row xs={1} md={3} className="g-4">
            {
                teamMembers.map(
                    (member, idx) => {
                        return (
                            <Col>
                                <Card className="bg-dark text-light">
                                    <Card.Img variant="top" src={member.photo} />
                                    <Card.Body>
                                        <Card.Title>{ member.name }  </Card.Title>
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