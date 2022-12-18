import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <Navbar.Brand onClick={() => navigate("/")}>M.T trading card game</Navbar.Brand>
                <NavDropdown title="POKEMON SERIES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

           


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