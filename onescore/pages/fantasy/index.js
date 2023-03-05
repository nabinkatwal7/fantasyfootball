import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navba from "react-bootstrap/Navbar";

// import EmbedTable from "../../components/EmbedTable";
// import Embed from 'react-embed'

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import PersonIcon from "@mui/icons-material/Person";
import Groups3Icon from "@mui/icons-material/Groups3";

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch("http://localhost:5000/getPlayers");
      const data = await res.json();
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  const teamMap = (teamid) => {
    const team = {
      1: "Arsenal",
      2: "Aston Villa",
      3: "Bournemouth",
      4: "Brentford",
      5: "Brighton and Hove Albion",
      6: "Chelsea",
      7: "Crystal Palace",
      8: "Everton",
      9: "Fulham",
      10: "Leicester City",
      11: "Leeds United",
      12: "Liverpool",
      13: "Manchester City",
      14: "Manchester United",
      15: "Newcastle United",
      16: "Nottingham Forest",
      17: "Southampton",
      18: "Tottenham Hotspur",
      19: "West Ham United",
      20: "Wolverhampton Wanderers",
    };
    let teamNameMapped = team[teamid];
    return teamNameMapped;
  };

  const positionMap = (positionid) => {
    const position = {
      1: "Goalkeeper",
      2: "Defender",
      3: "Midfielder",
      4: "Forward",
      5: "Midfielder",
      6: "Midfielder",
      7: "Forward",
      8: "Forward",
      9: "Forward",
      10: "Forward(Secondary)",
      11: "Goalkeeper(Starting)",
      12: "Defender(Starting)",
      13: "Defender(Starting)",
      14: "Midfielder(Starting)",
      15: "Midfielder(Starting)",
      16: "Midfielder(Starting)",
      17: "Forward(Starting)",
      18: "Forward(Starting)",
      19: "Forward(Starting)",
      20: "Forward(Secondary, Starting)",
    };
    let positionMapped = position[positionid];
    return positionMapped;
  };

  let pid = Math.floor(Math.random() * 740);

  return (
    <div className="home-page-container">
      <Navba fixed="bottom" bg="primary" variant="dark">
        <Container>
          {isLoggedIn && (
            <Nav className="navbarr me-auto navbar navbar-dark bg-primary">
              <Nav.Link href="/fantasy/createTeam">Profile</Nav.Link>
              <Nav.Link href="/fantasy/createTeam">Create Team</Nav.Link>
              <Nav.Link href="/fantasy/viewTeams">View Teams</Nav.Link>
              <Nav.Link href="/fantasy/viewPlayers">View Players</Nav.Link>
              <Nav.Link href="/fantasy/viewLeagues">View Leagues</Nav.Link>
            </Nav>
          )}
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <div className="auth-actions">
              <Link href="/fantasy/Login" className="btn btn-primary">
                Log In
              </Link>
              <Link href="/fantasy/Signup" className="btn btn-success">
                Sign Up
              </Link>
            </div>
          )}
        </Container>
      </Navba>
      <div className="section-container">
        {/* <Container>
          <Embed url="https://cdn.footystats.org/embeds/standings.js" />
        </Container> */}
        {players.map((player) => {
          if (pid == player.id) {
            const playerteam = teamMap(player.team);
            const playerPosition = positionMap(player.element_type);
            return (
              <Card key={player.id} style={{ width: "28rem" }}>
                <Card.Title>
                  <b>
                    {player.first_name} {player.second_name}
                  </b>
                </Card.Title>
                <Card.Img
                  className="player-img"
                  variant="top"
                  src={
                    "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                    player.code +
                    ".png"
                  }
                />
                <Card.Body>
                  <Card.Title>{playerteam}</Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Text></Card.Text>
                        <Card.Text>{playerPosition}</Card.Text>
                        <Card.Text>Goals: {player.goals_scored}</Card.Text>
                        <Card.Text>xG: {player.expected_goals}</Card.Text>
                        <Card.Text>Assists: {player.assists}</Card.Text>
                        <Card.Text>xA: {player.expected_assists}</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>Minutes Played: {player.minutes}</Card.Text>
                        <Card.Text>
                          Clean Sheets: {player.clean_sheets}
                        </Card.Text>
                        <Card.Text>Cost: ${player.now_cost / 10}M</Card.Text>
                        <Card.Text>
                          Cost Rank: {player.now_cost_rank_type}
                        </Card.Text>
                        <Card.Text>ICT Index: {player.ict_index}</Card.Text>
                        <Card.Text>
                          Transfers In: {player.transfers_in}
                        </Card.Text>
                        <Card.Text>
                          Transfers Out: {player.transfers_out}
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          Penalties Missed: {player.penalties_missed}
                        </Card.Text>
                        <Card.Text>
                          Points Per Game: {player.points_per_game}
                        </Card.Text>
                        <Card.Text>
                          Starts Per 90: {player.starts_per_90}
                        </Card.Text>
                        <Card.Text>
                          Yellow Cards: {player.yellow_cards}
                        </Card.Text>
                        <Card.Text>Red Cards: {player.red_cards}</Card.Text>
                        <Card.Text>Threat: {player.threat}</Card.Text>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}

export default index;
