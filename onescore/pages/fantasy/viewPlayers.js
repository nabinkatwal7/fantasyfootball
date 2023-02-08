import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function viewPlayers() {
const [players, setPlayers] = useState([]);
const [displayedPlayers, setDisplayedPlayers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  const fetchPlayers = async () => {
  const res = await fetch("http://localhost:5000/getPlayers");
  const data = await res.json();
  setPlayers(data);
  setDisplayedPlayers(data);
};
fetchPlayers();
}, []);

const sortByGoals = () => {
  const sortedPlayers = displayedPlayers.slice().sort((a,b) => b.goals_scored - a.goals_scored
);
setDisplayedPlayers(sortedPlayers);
};

const sortByName = () => {
  const sortedPlayers = displayedPlayers.slice().sort((a, b) => {
const nameA = `${a.first_name} ${a.second_name}`.toUpperCase();
const nameB = `${b.first_name} ${b.second_name}`.toUpperCase();
if (nameA < nameB) {
return -1;
}
if (nameA > nameB) {
return 1;
}
return 0;
});
setDisplayedPlayers(sortedPlayers);
};

const searchPlayer = (e) => {
const searchTerm = e.target.value.toUpperCase();
const searchedPlayers = players.filter((player) => {
const name = `${player.first_name} ${player.second_name}`.toUpperCase();
return name.includes(searchTerm);
});
setDisplayedPlayers(searchedPlayers);
};

return (

  <div className="viewplayers">
    <div className="search-container">
      <input
        type="text"
        placeholder="Search player by name"
        onChange={searchPlayer}
      />
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={sortByName}>Player Name</th>
            <th onClick={sortByGoals}>Goals</th>
            <th>Positions</th>
            <th>Team</th>
            <th>Assists</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {displayedPlayers.map((player, index) => {
            const className =
              index % 2 === 0 ? "table-row-light" : "table-row-dark";
            return (
              <tr key={player.id} className={className}>
                <td>
                  <Link href={'/fantasy/player/'+player.id}>
                    {player.first_name} {player.second_name}
                  </Link>
                </td>
                <td>{player.goals_scored}</td>
                <td>{player.element_type}</td>
                <td>{player.team}</td>
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