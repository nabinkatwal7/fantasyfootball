import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const ViewLeagues = () => {
  const router = useRouter();
  const [leagueName, setLeagueName] = useState("");
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const response = await fetch("http://localhost:5000/leagues");
      const data = await response.json();
      setLeagues(data);
    };
    fetchLeagues();
  }, []);

  const handleCreateLeague = async (e) => {
    e.preventDefault();
    const teamname = sessionStorage.getItem("teamname");
    const response = await fetch("http://localhost:5000/leagues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: leagueName, creator: teamname }),
    });
    const data = await response.json();
    setLeagues([...leagues, data]);
    setLeagueName("");
  };

  const handleJoinLeague = (id) => {
    router.push(`http://localhost:3000/fantasy/league/${leagueName}`);
  };

  return (
    <Container>
      <h2>Create a League</h2>
      <Form onSubmit={handleCreateLeague}>
        <Form.Group controlId="formLeagueName">
          <Form.Label>League Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter league name"
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create League
        </Button>
      </Form>
      <hr />
      <h2>Join a League</h2>
      <ListGroup>
        {leagues.map((league) => (
          <ListGroup.Item
            key={league.id}
            action
            onClick={() => handleJoinLeague(league.id)}
          >
            {league.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ViewLeagues;
