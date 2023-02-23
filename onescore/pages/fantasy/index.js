import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import PersonIcon from "@mui/icons-material/Person";
import Groups3Icon from "@mui/icons-material/Groups3";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <div className="header">
        {/* <h1 className="title">Welcome to OneScore Fantasy Football!</h1> */}
        {isLoggedIn && (
          <nav className="fantasy-nav">
            <Link
              className="fantasy-links"
              href="/fantasy/createTeam"
              className="nav-link"
            >
              <AccountBoxIcon />
              Profile
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/createTeam"
              className="nav-link"
            >
              <AddBoxIcon />
              Create Team
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewTeams"
              className="nav-link"
            >
              <ViewDayIcon />
              View Team
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewPlayers"
              className="nav-link"
            >
              <PersonIcon />
              View Players
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewLeagues"
              className="nav-link"
            >
              <Groups3Icon />
              View Leagues
            </Link>
          </nav>
        )}
        <div className="auth-actions">
          {isLoggedIn ? (
            <button className="auth-link" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <div className="auth-actions">
              <Link href="/fantasy/Login" className="auth-link">
                Log In
              </Link>
              <Link href="/fantasy/Signup" className="auth-link">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="section-container">
        {players.map((player) => {
          if (pid == player.id) {
            const playerteam = teamMap(player.team);
            const playerPosition = positionMap(player.element_type);
            return (
              <div key={player.id}>
                <img
                  className="player-img"
                  src={
                    "https://resources.premierleague.com/premierleague/photos/players/110x140/p" +
                    player.code +
                    ".png"
                  }
                  alt="player image"
                />
                <div className="player-details">
                  <div className="player-detail">
                    <h1>
                      {player.first_name} {player.second_name}
                    </h1>
                    <h1>{playerteam}</h1>
                    <h1>{playerPosition}</h1>
                    <h1>Goals: {player.goals_scored}</h1>
                    <h1>xG: {player.expected_goals}</h1>
                    <h1>Assists: {player.assists}</h1>
                    <h1>xA: {player.expected_assists}</h1>
                  </div>
                  <div className="stats">
                    <h3>Minutes Played: {player.minutes}</h3>
                    <h3>Clean Sheets: {player.clean_sheets}</h3>
                    <h3>Cost: ${player.now_cost / 10}M</h3>
                    <h3>Cost Rank: {player.now_cost_rank_type}</h3>
                    <h3>ICT Index: {player.ict_index}</h3>
                    <h3>Transfers In: {player.transfers_in}</h3>
                    <h3>Transfers Out: {player.transfers_out}</h3>
                  </div>
                  <div className="more-stats">
                    <h3>Penalties Missed: {player.penalties_missed}</h3>
                    <h3>Points Per Game: {player.points_per_game}</h3>
                    <h3>Starts Per 90: {player.starts_per_90}</h3>
                    <h3>Yellow Cards: {player.yellow_cards}</h3>
                    <h3>Red Cards: {player.red_cards}</h3>
                    <h3>Threats: {player.threat}</h3>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default index;
