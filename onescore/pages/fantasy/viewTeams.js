import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function viewTeams() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      fetch(`http://localhost:5000/teams?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          setTeam(data);
        });
    }
  }, []);

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

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-container">
      <Container>
        <Row>
          <Col>
            <h3>{team.teamname}</h3>
          </Col>
          <Col>
            <h3>{team.username}</h3>
          </Col>
        </Row>
      </Container>
      {players.map((player) => {
        return (
          <Container key={player.id}>
            <Row>
              {team.players[0].GK.map((p) => {
                if (player.id == p) {
                  return (
                    <Col key={player.id}>
                      <Card style={{ width: "7rem" }}>
                        <Card.Img
                          variant="top"
                          src={
                            "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                            player.code +
                            ".png"
                          }
                        />
                        <Card.Text>{player.web_name}</Card.Text>
                        <Card.Text>Pts: {player.event_points}</Card.Text>
                      </Card>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
            <Row>
              {team.players[0].DEF.map((p) => {
                if (player.id == p) {
                  return (
                    <Col key={player.id}>
                      <Card style={{ width: "7rem" }}>
                        <Card.Img
                          variant="top"
                          src={
                            "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                            player.code +
                            ".png"
                          }
                        />
                        <Card.Text>{player.web_name}</Card.Text>
                        <Card.Text>Pts: {player.event_points}</Card.Text>
                      </Card>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
            <Row>
              {team.players[0].MID.map((p) => {
                if (player.id == p) {
                  return (
                    <Col key={player.id}>
                      <Card style={{ width: "7rem" }}>
                        <Card.Img
                          variant="top"
                          src={
                            "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                            player.code +
                            ".png"
                          }
                        />
                        <Card.Text>{player.web_name}</Card.Text>
                        <Card.Text>Pts: {player.event_points}</Card.Text>
                      </Card>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
            <Row>
              {team.players[0].FWD.map((p) => {
                if (player.id == p) {
                  return (
                    <Col key={player.id}>
                      <Card style={{ width: "7rem" }}>
                        <Card.Img
                          variant="top"
                          src={
                            "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                            player.code +
                            ".png"
                          }
                        />
                        <Card.Text>{player.web_name}</Card.Text>
                        <Card.Text>Pts: {player.event_points}</Card.Text>
                      </Card>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
          </Container>
        );
      })}
    </div>
  );
}

export default viewTeams;
