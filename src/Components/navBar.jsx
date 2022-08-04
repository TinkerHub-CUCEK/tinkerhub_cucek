import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const styles = {
        "linkText": {
            fontSize: "20px"
        }
    }
    return (
        <Navbar style={{height: "100px"}} bg="transparent" variant='dark' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand></Navbar.Brand>
                    </Nav>
                    <div className='d-flex text-white'>
                        <Nav.Link style={styles.linkText} className='mx-2' href="#home">About us</Nav.Link>
                        <Nav.Link style={styles.linkText} className='mx-2' href="#events">Events</Nav.Link>
                        <Nav.Link style={styles.linkText} className='mx-2' href="#link">Contact</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;