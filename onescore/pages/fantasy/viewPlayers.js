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
  console.log(positionid);
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
            const playerteam = teamMap(player.team)
            const playerPostion = positionMap(player.element_type)
            const className =
              index % 2 === 0 ? "table-row-light" : "table-row-dark";
            return (
              <tr key={player.id} className={className}>
                <td>
                  <Link className="player-link" href={'/fantasy/player/'+player.id}>
                    {player.first_name} {player.second_name}
                  </Link>
                </td>
                <td>{player.goals_scored}</td>
                <td>{playerPostion}</td>
                <td>{playerteam}</td>
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