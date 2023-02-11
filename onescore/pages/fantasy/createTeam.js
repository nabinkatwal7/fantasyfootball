import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

function createTeam() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(1000);
  const router = useRouter();

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch("http://localhost:5000/createteam");
      const data = await res.json();
      setPlayers(data.players);
    }

    fetchPlayers();
  }, []);

  const addPlayerToTeam = (player) => {
    if (budget - player.cost >= 0 && team.length < 15) {
      setTeam([...team, player]);
      setBudget(budget - player.cost);
    }
  };

  const removePlayerFromTeam = (player) => {
    setTeam(team.filter((p) => p.id !== player.id));
    setBudget(budget + player.cost);
  };

  const handleConfirmTeam = async () => {
    const res = await fetch("/saveteam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ team }),
    });

    if (res.ok) {
      router.push("/teams");
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <h2>Available Budget: ${budget}</h2>
      <h2>Players:</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.first_name} {player.second_name} - ${player.now_cost}
            <button onClick={() => addPlayerToTeam(player)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Team:</h2>
      <ul>
        {team.map((player) => (
          <li key={player.id}>
            {player.first_name} - ${player.now_cost}
            <button onClick={() => removePlayerFromTeam(player)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleConfirmTeam}>Confirm Team</button>
    </div>
  );
}

export default createTeam;
