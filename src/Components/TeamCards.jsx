import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import arjun from "../assets/team/arjun.jpeg"
import anu from "../assets/team/anu.jpeg"
import riya from "../assets/team/riya.jpg"
import dhilshad from "../assets/team/dhilshad.jpg"
import dinasree from "../assets/team/dinasree.jpg"
import ashika from "../assets/team/ashika.jpg"


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
        },
        {
            "name": "Ashika",
            "photo": ashika,
            "title": "WIT Lead"
        },
        {
            "name": "Dhilshad",
            "photo": dhilshad,
            "title": 'Media Lead'
        },
        {
            "name": "Dinasree",
            "photo": dinasree,
            "title": "Media Lead"
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
        </Row>
    );
}

export default TeamCards;