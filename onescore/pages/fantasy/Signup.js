import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [status, setStatus] = useState();
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    if (status === "success") {
      router.push("/fantasy/Login");
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Successfully registered");
      }
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordStrength(CheckPassword(e.target.value));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signupdiv">
      <Container fluid>
        <Row>
          <Col xs={8}>
            <Image
              className="img-signup"
              fluid="true"
              rounded
              src="https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Premier League"
            />
          </Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repeat Password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <p className="account-info">
                Already have an account?
                <Link href="/fantasy/Login" className="login-link">
                  Log In instead
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
