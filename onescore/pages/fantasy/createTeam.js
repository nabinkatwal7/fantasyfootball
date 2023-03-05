import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function createTeam() {
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState([]);
  const [team, setTeam] = useState({
    GK: [],
    DEF: [],
    MID: [],
    FWD: [],
    SUBS: [],
  });
  let selectedPlayer = {};
  const [teamName, setTeamName] = useState()
  const [hasTeamName, setHasTeamName] = useState(false)
  const [teamData, setTeamData] = useState([])
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setUsername(name);
    }
  }, []);

  function createTeamData(team) {
    playerData.map();
  }

  const handlePositionChange = (position, playerId) => {
    if (!team[position] || team[position].includes(playerId)) {
      return;
    }
    setTeam({
      ['username']: username,
      ['teamname']:teamName,
      ...team,
      [position]: [...team[position], playerId],
    });
  };

  const saveTeam = async (teamData) => {
    const response = await fetch("http://localhost:5000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });
    const data = await response.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTeamData(team)
    saveTeam(team)
    setRedirect(true);
  };

  if (redirect) {
    const router = useRouter();
    router.push("/viewTeams");
  } 

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(
        "https://fantasy.premierleague.com/api/bootstrap-static/"
      );
      const data = await response.json();
      setPlayers(data.elements);
    };
    fetchPlayers();
  }, []);

   const handleNameChange = (event) => {
     setTeamName(event.target.value);
   };

  function handleTeamName(event){
    event.preventDefault()
    setHasTeamName(true)
  }

  return (
    <div className="createteam-container">
      <Container>
        <Row>
          <Col className="text-center">
            {hasTeamName ? (
              <h3>{teamName}</h3>
            ) : (
              <Form>
                <Form.Control
                  type="text"
                  value={teamName}
                  onChange={handleNameChange}
                  placeholder="Enter Team Name"
                />
                <Button
                  onClick={handleTeamName}
                  className="btn btn-secondary btn-sm"
                >
                  Set
                </Button>
              </Form>
            )}
          </Col>
          <Col>
            <h3>{username}</h3>
          </Col>
          {/* <Col>
            <h3>Bank: 100.0M</h3>
          </Col> */}
        </Row>
        <Row className="p-5 mt-2">
          <Row className="text-center">
            <Col>
              <h4>Starting XI. Formation: 4-3-3</h4>
            </Col>
          </Row>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("GK", e.target.value)}
            >
              <option>Select a goalkeeper</option>
              {players
                .filter((p) => p.element_type === 1)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="p-5 mt-2">
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("DEF", e.target.value)}
            >
              <option>Select a defender</option>
              {players
                .filter((p) => p.element_type === 2)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("DEF", e.target.value)}
            >
              <option>Select a defender</option>
              {players
                .filter((p) => p.element_type === 2)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("DEF", e.target.value)}
            >
              <option>Select a defender</option>
              {players
                .filter((p) => p.element_type === 2)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("DEF", e.target.value)}
            >
              <option>Select a defender</option>
              {players
                .filter((p) => p.element_type === 2)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="p-5 mt-2">
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("MID", e.target.value)}
            >
              <option>Select a midfielder</option>
              {players
                .filter((p) => p.element_type === 3)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("MID", e.target.value)}
            >
              <option>Select a midfielder</option>
              {players
                .filter((p) => p.element_type === 3)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("MID", e.target.value)}
            >
              <option>Select a midfielder</option>
              {players
                .filter((p) => p.element_type === 3)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="p-5 mt-2">
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("FWD", e.target.value)}
            >
              <option>Select a forward</option>
              {players
                .filter((p) => p.element_type === 4)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("FWD", e.target.value)}
            >
              <option>Select a forward</option>
              {players
                .filter((p) => p.element_type === 4)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("FWD", e.target.value)}
            >
              <option>Select a forward</option>
              {players
                .filter((p) => p.element_type === 4)
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="p-5 mt-2">
          <Row className="text-center">
            <Col>
              <h4>Subsitutes</h4>
            </Col>
          </Row>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("SUB", e.target.value)}
            >
              <option>Select a substitute</option>
              {players
                .filter((p) => p.element_type === 1) // Exclude goalkeepers
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("SUB", e.target.value)}
            >
              <option>Select a substitute</option>
              {players
                .filter((p) => p.element_type === 1) // Exclude goalkeepers
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("SUB", e.target.value)}
            >
              <option>Select a substitute</option>
              {players
                .filter((p) => p.element_type === 1) // Exclude goalkeepers
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handlePositionChange("SUB", e.target.value)}
            >
              <option>Select a substitute</option>
              {players
                .filter((p) => p.element_type === 1) // Exclude goalkeepers
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.web_name} ({p.now_cost / 10})
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Row>
        <Row className="p-5 mt-2">
          <Col className="text-center">
            <Button type="submit" onClick={handleSubmit}>
              Create Team
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default createTeam;
