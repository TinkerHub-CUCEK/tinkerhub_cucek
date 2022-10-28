import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import arjun from "../assets/team/arjun.jpeg"
import anu from "../assets/team/anu.jpeg"
import riya from "../assets/team/riya.jpg"
import dhilshad from "../assets/team/dhilshad.jpg"
import dinasree from "../assets/team/dinasree.jpg"
import ashika from "../assets/team/ashika.jpg"
import stephy from "../assets/team/stephy.jpeg"
import abhijith from "../assets/team/abhijith.jpg"

function TeamCards() {
    const teamMembers = [
        {
            "name": "Arjun",
            "photo": arjun,
            "title": "Campus Lead"
        },
        {
            "name": "Abhijith Ram P",
            "photo": abhijith,
            "title": "Tech Lead"
        },
        {
            "name": "Ashika",
            "photo": ashika,
            "title": "WIT Lead"
        },
        {
            "name": "Anu fasmin",
            "photo": anu,
            "title": "WIT Co-lead"
        },
        {
            "name": "Riya Rose James",
            "photo": riya,
            "title": 'WIT Creative lead'
        },
        {
            "name": "Dhilshad",
            "photo": dhilshad,
            "title": 'Media Lead'
        },
        {
            "name": "Dinasree",
            "photo": dinasree,
            "title": "WIT Media Lead"
        },
        {
            "name": "Stephy",
            "photo": stephy,
            "title": "WIT Tech Lead"
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