import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import anu from "../assets/team/anu.png"
import arjun from "../assets/team/arjun.png"
import riya from "../assets/team/riya.png"


function TeamCards() {
    const teamMembers = [
        {
            "name": "Arjun",
            "photo": arjun,
            "title": "Campus Lead"
        },
        {
            "name": "Anu fasmin",
            "photo": anu,
            "title": "Co-lead"
        },
        {
            "name": "Riya Rose James",
            "photo": riya,
            "title": 'Creative lead'
        }
    ]
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
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Card className="bg-dark text-light">
                        <Card.Img variant="top" src="http://holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default TeamCards;