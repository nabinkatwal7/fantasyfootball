import React from "react";
import { useState, useEffect } from "react";

function viewPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch("http://localhost:5000/getPlayers");
      const data = await res.json();
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  console.log(players);

  return (
    <div className="viewplayers">
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
            {players.map((player, index) => {
              const className =
                index % 2 === 0 ? "table-row-light" : "table-row-dark";
              return (
                <tr key={player.id} className={className}>
                  <td>{player.team}</td>
                  <td>
                    {player.first_name} {player.second_name}
                  </td>
                  <td>{player.element_type}</td>
                  <td>{player.goals_scored}</td>
                  <td>{player.assists}</td>
                  <td>{player.total_points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default viewPlayers;
