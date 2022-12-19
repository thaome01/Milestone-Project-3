import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from "react-router-dom";
import "./navbar.css";



function NavBar() {

    const navigate = useNavigate();
    const change = localStorage.getItem("user");

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="body">
            
            <Navbar>
                <Container>
                    <div className="logo">
                        <Navbar.Brand onClick={() => navigate("/")}>
                            M.T[TRADING CARD GAME]
                        </Navbar.Brand>
                    </div>
                    <div className="drop-down">
                    <NavDropdown title="POKEMON SERIES">
                        <h4><u>Latest Series</u></h4>
                        <NavDropdown.Item>SWORD & SHIELD</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>SM SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>XY SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>BLACK & WHITE SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>CALL OF LEGENDS SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>HEARTGOLD & SOULSILVER SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>PLATINUM SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>DIAMOND & PEARL SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>EX SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>E-CARD SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>LEGENDARY COLLECTION</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>NEO SERIES</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>ORIGINAL SERIES</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="dark">Search</Button>

                    </Form>
                    <div className='btn-0'>
                    {change ? (
                        <Button onClick={logOut} to="/" variant="dark" className="btn-2">
                            logout
                        </Button>
                    ) : (
                        <>
                            <Button onClick={() => navigate("/login")} variant="dark" className="btn-3">Login</Button>
                            <Button onClick={() => navigate("/signup")} variant="dark" className="btn-4">Signup</Button>
                        </>
                    )}

                    <Button variant="dark" className="btn-5">sell with us</Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar