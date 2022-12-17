import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();
    const change = localStorage.getItem("user");

    const logOut = () => {
        localStorage.clear();
        navigate("/home");
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/home")}>M.T trading card game</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>

                    </Form>
                    {change ? (
                        <Button onClick={logOut} to="/">
                            logout
                        </Button>
                    ) : (
                        <>
                            <Button onClick={() => navigate("/login")}>Login</Button>
                            <Button onClick={() => navigate("/signup")}>Signup</Button>
                        </>
                    )}

                    <Button>Sell With Us</Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar