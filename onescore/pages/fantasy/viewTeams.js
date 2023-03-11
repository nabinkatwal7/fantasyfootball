import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function viewTeams() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState(null);
  const gk = []
  const def = []
  const mid = []
  const fwd = []
  let totalPoints = 0
  let teamValue = 0

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

  const saveData = ()=>{
    sessionStorage.setItem("teamname", JSON.stringify(team.teamname))
    sessionStorage.setItem("points", totalPoints)
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

  function mapPlayers() {
    if(!team){
      console.log('team not found')
    }else{
      players.map((player) => {
        if (!team) {
          console.log("team not found");
        } else {
          team.players[0].GK.map((p) => {
            if (p == player.id) {
              gk.push(player);
              totalPoints += player.event_points
              teamValue += player.now_cost/10
            }
          });
          team.players[0].DEF.map((p) => {
            if (player.id == p) {
              def.push(player);
              totalPoints += player.event_points;
              teamValue += player.now_cost / 10;
            }
          });
          team.players[0].MID.map((p) => {
            if (player.id == p) {
              mid.push(player);
              totalPoints += player.event_points;
              teamValue += player.now_cost / 10;
            }
          });
          team.players[0].FWD.map((p) => {
            if (player.id == p) {
              fwd.push(player);
              totalPoints += player.event_points;
              teamValue += player.now_cost / 10;
            }
          });
        }
      });
      saveData()
    }
  };

  mapPlayers()

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
          {/* <Col>
            <h3>{team.username}</h3>
          </Col> */}
          <Col>
            <h3>Gameweek Points: {totalPoints}</h3>
          </Col>
          <Col>
            <h3> Team Value: ${Math.round(teamValue,2)}M</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="p-5 mt-2 justify-content-md-center">
          {gk.map((p) => {
            return (
              <Col sm={3} key={p.id}>
                <Card style={{ width: "100%" }} className="text-center">
                  <Card.Img
                    variant="top"
                    src={
                      "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                      p.code +
                      ".png"
                    }
                  />
                  <Card.Text>{p.web_name}</Card.Text>
                  <Card.Text>Pts: {p.event_points}</Card.Text>
                  <Card.Text>Form: {p.form}</Card.Text>
                  <Card.Text>${p.now_cost / 10}M</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-2">
          {def.map((p) => {
            return (
              <Col key={p.id}>
                <Card style={{ width: "100%" }} className="px-2 text-center">
                  <Card.Img
                    variant="top"
                    src={
                      "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                      p.code +
                      ".png"
                    }
                  />
                  <Card.Text>{p.web_name}</Card.Text>
                  <Card.Text>Pts: {p.event_points}</Card.Text>
                  <Card.Text>Form: {p.form}</Card.Text>
                  <Card.Text>${p.now_cost / 10}M</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-2">
          {mid.map((p) => {
            return (
              <Col key={p.id}>
                <Card style={{ width: "80%" }} className="text-center">
                  <Card.Img
                    variant="top"
                    src={
                      "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                      p.code +
                      ".png"
                    }
                  />
                  <Card.Text>{p.web_name}</Card.Text>
                  <Card.Text>Pts: {p.event_points}</Card.Text>
                  <Card.Text>Form: {p.form}</Card.Text>
                  <Card.Text>${p.now_cost / 10}M</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="p-5 mt-2">
          {fwd.map((p) => {
            return (
              <Col key={p.id}>
                <Card style={{ width: "80%" }} className='text-center'>
                  <Card.Img
                    variant="top"
                    src={
                      "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                      p.code +
                      ".png"
                    }
                  />
                  <Card.Text>{p.web_name}</Card.Text>
                  <Card.Text>Pts: {p.event_points}</Card.Text>
                  <Card.Text>Form: {p.form}</Card.Text>
                  <Card.Text>${p.now_cost / 10}M</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default viewTeams;
