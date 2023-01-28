import React from "react";
import { useState, useEffect } from "react";

function viewPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch("http://localhost:5000/players");
      const data = await res.json();
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  console.log(players);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Player Name</th>
              <th>Positions</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              <tr key={player.id}>
                <td>{player.team}</td>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.points}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default viewPlayers;
