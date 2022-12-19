import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./login.css"




function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("email,password", email, password);
        let result = await fetch("http://localhost:5001/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.log(result);
        if (result.firstName) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        } else {
            alert("Your database do not exist!");
        }
    };

    // Handling the email to login
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the password to login
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="body">
        <div className="login">
        <Container>
            <Card className="mb-2">
                <h3>User Login</h3>
                <Card.Body>
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />
                        <br />

                        <Form.Control
                            type="text"
                            placeholder="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <br />
                        <Button variant="secondary" onClick={handleLogin}>
                            LOG IN
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </div>
        </div>
    );
}

export default Login;