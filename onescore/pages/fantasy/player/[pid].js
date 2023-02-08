import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

  return (
    <div className="player-container">
      {players.map((player) => {
        if (pid == player.id) {
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
                  <h1>{player.team}</h1>
                  <h1>{player.element_type}</h1>
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
