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

  const [sortType, setSortType] = useState("asc");
  const [sortKey, setSortKey] = useState("goals_scored");

  const sortBy = (key) => {
    let newSortType = sortType === "asc" ? "desc" : "asc";
    setSortType(newSortType);
    setSortKey(key);
  };

  let sortedPlayers = [...players];
  if (sortKey === "goals_scored") {
    sortedPlayers.sort((a, b) =>
      sortType === "asc"
        ? a.goals_scored - b.goals_scored
        : b.goals_scored - a.goals_scored
    );
  } else if (sortKey === "first_name") {
    sortedPlayers.sort((a, b) => {
      const nameA = a.first_name.toLowerCase();
      const nameB = b.first_name.toLowerCase();
      if (sortType === "asc") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      }
    });
  }

  return (
    <div className="viewplayers">
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={() => sortBy("first_name")}>Player Name</th>
              <th>Team</th>
              <th>Positions</th>
              <th onClick={() => sortBy("goals_scored")}>Goals</th>
              <th>Assists</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => {
              const className =
                index % 2 === 0 ? "table-row-light" : "table-row-dark";
              return (
                <tr key={player.id} className={className}>
                  <td>
                    {player.first_name} {player.second_name}
                  </td>
                  <td>{player.team}</td>
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
