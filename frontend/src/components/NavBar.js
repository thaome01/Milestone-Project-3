import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">M.T trading card game</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>

                    </Form>
                    <Button>Login</Button>
                    <Button>Sign in</Button>
                    <Button>Sell With Us</Button>
                    <Button></Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar