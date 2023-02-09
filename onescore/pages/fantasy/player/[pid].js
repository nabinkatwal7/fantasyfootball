import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CleaningServices } from "@mui/icons-material";

function Player() {
  const router = useRouter();
  const { pid } = router.query;

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
    console.log(positionid)
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
    let positionMapped = position[positionid]
    return positionMapped
  };

  return (
    <div className="player-container">
      {players.map((player) => {
        if (pid == player.id) {
          const playerteam = teamMap(player.team);
          const playerPosition = positionMap(player.element_type)
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
  );
}

export default Player;
