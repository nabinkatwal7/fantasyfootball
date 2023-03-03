import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from 'next/router'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem('username', data.username)
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (redirect) {
    const router = useRouter()
    router.push('/fantasy')
    } 

  return (
    <div className="signupdiv">
      <Container fluid>
        <Row>
          <Col xs={8}>
            <Image
              className="img-signup"
              fluid="true"
              rounded
              src="https://images.unsplash.com/photo-1563580853176-38535245e8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
              alt="Premier League"
            />
          </Col>
          <Col>
            <h1>Pick up where you left</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your Password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <p className="account-info">
                Do Not have an Account?
                <Link href="/fantasy/Signup" className="login-link">
                  Create an account
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Login;
