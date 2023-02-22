import React, { useState, useEffect } from "react";

function createTeam() {
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState([]);
  const [team, setTeam] = useState({
    GK: [],
    DEF: [],
    MID: [],
    FWD: [],
    SUBS: [],
  });
  let selectedPlayer = {};

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setUsername(name);
    }
  }, []);

  function createTeamData(team) {
    playerData.map();
  }

  const handlePositionChange = (position, playerId) => {
    if (!team[position] || team[position].includes(playerId)) {
      return;
    }
    setTeam({
      ...team,
      [position]: [...team[position], playerId],
    });
  };

  const saveTeam = async (teamData) => {
    const response = await fetch("localhost:5000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });
    const data = await response.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTeamData(team)
    alert("Team created!", team);
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(
        "https://fantasy.premierleague.com/api/bootstrap-static/"
      );
      const data = await response.json();
      setPlayers(data.elements);
    };
    fetchPlayers();
  }, []);

  function createTeamData(team) {
    players.map((player) => {
      if(team.GK == player.id){
        selectedPlayer = {
          'name': player.web_name,
          'position':'GK',
          'cost_now':player.cost_now/10
        }
      }
    });
  }


  return (
    <div className="createteam-container">
      {/* GOALKEEPER */}
      <div className="pitch-container">
        <h1>Pick your team</h1>
        <p>{username}</p>
        <h2>Goalkeeper</h2>
        <select onChange={(e) => handlePositionChange("GK", e.target.value)}>
          <option>Select a goalkeeper</option>
          {players
            .filter((p) => p.element_type === 1)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>

        {/* DEFENDERS */}
        <h2>Defenders</h2>
        <select onChange={(e) => handlePositionChange("DEF", e.target.value)}>
          <option>Select a defender</option>
          {players
            .filter((p) => p.element_type === 2)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("DEF", e.target.value)}>
          <option>Select a defender</option>
          {players
            .filter((p) => p.element_type === 2)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("DEF", e.target.value)}>
          <option>Select a defender</option>
          {players
            .filter((p) => p.element_type === 2)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("DEF", e.target.value)}>
          <option>Select a defender</option>
          {players
            .filter((p) => p.element_type === 2)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>

        {/* MIDFIELDERS */}
        <h2>Midfielders</h2>
        <select onChange={(e) => handlePositionChange("MID", e.target.value)}>
          <option>Select a midfielder</option>
          {players
            .filter((p) => p.element_type === 3)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("MID", e.target.value)}>
          <option>Select a midfielder</option>
          {players
            .filter((p) => p.element_type === 3)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("MID", e.target.value)}>
          <option>Select a midfielder</option>
          {players
            .filter((p) => p.element_type === 3)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>

        {/* FORWARDS */}
        <h2>Forwards</h2>
        <select onChange={(e) => handlePositionChange("FWD", e.target.value)}>
          <option>Select a forward</option>
          {players
            .filter((p) => p.element_type === 4)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("FWD", e.target.value)}>
          <option>Select a forward</option>
          {players
            .filter((p) => p.element_type === 4)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("FWD", e.target.value)}>
          <option>Select a forward</option>
          {players
            .filter((p) => p.element_type === 4)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>

        {/* SUBS  */}
        <h2>Substitutes</h2>
        <select onChange={(e) => handlePositionChange("SUB", e.target.value)}>
          <option>Select a substitute</option>
          {players
            .filter((p) => p.element_type === 1) // Exclude goalkeepers
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("SUB", e.target.value)}>
          <option>Select a substitute</option>
          {players
            .filter((p) => p.element_type !== 1) // Exclude goalkeepers
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("SUB", e.target.value)}>
          <option>Select a substitute</option>
          {players
            .filter((p) => p.element_type !== 1) // Exclude goalkeepers
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <select onChange={(e) => handlePositionChange("SUB", e.target.value)}>
          <option>Select a substitute</option>
          {players
            .filter((p) => p.element_type !== 1) // Exclude goalkeepers
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.web_name} ({p.now_cost / 10})
              </option>
            ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Create Team
        </button>
      </div>
    </div>
  );
}

export default createTeam;
