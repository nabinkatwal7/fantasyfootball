import React from 'react'

function viewTeams() {

  const data = {
    username: "john",
    league: "not joined",
    players: [
      {
        name: "Mohamed Salah",
        position: "MID",
        cost_now: 12.5,
      },
      {
        name: "Harry Kane",
        position: "FWD",
        cost_now: 12.3,
      },
      {
        name: "Trent Alexander-Arnold",
        position: "DEF",
        cost_now: 7.5,
      },
      {
        name: "Edouard Mendy",
        position: "GK",
        cost_now: 5.2,
      },
      {
        name: "Rúben Dias",
        position: "DEF",
        cost_now: 6.1,
      },
      {
        name: "Luke Shaw",
        position: "DEF",
        cost_now: 6.5,
      },
      {
        name: "Patrick Bamford",
        position: "FWD",
        cost_now: 7.8,
      },
      {
        name: "Son Heung-min",
        position: "MID",
        cost_now: 9.1,
      },
      {
        name: "Diogo Jota",
        position: "FWD",
        cost_now: 7.4,
      },
      {
        name: "Aaron Wan-Bissaka",
        position: "DEF",
        cost_now: 5.2,
      },
      {
        name: "Kevin De Bryune",
        position: "MID",
        cost_now: 12.3,
      },
    ],
    points: 85,
    total_cost: 100.0,
  };

  const sortedPlayers = data.players.sort((a, b) => {
    const positions = ["GK", "DEF", "MID", "FWD"];
    return positions.indexOf(a.position) - positions.indexOf(b.position);
  });

  return (
    <div className="team-container">
      <div className="header">
        <h1>Team Information</h1>
        <h2>Username: {data.username}</h2>
        <h2>League: {data.league}</h2>
      </div>
      <div className="points">
        <p>Points: {data.points}</p>
        <p>Total Cost: {data.total_cost}M</p>
      </div>
      <div className="body">
        {sortedPlayers.map((player, index) => (
          <div className="player-card" key={index}>
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Cost: {player.cost_now}M</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default viewTeams