import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

function createTeam() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);
  const router = useRouter();

  useEffect(() => {
    async function fetchPlayers() {
      const res = await fetch("http://localhost:5000/createteam");
      const data = await res.json();
      setPlayers(data.players);
      setFilteredPlayers(data.players);
    }
  }, []);

  useEffect(() => {
    setFilteredPlayers(
      players.filter(
        (player) => player.now_cost >= minPrice && player.now_cost <= maxPrice
      )
    );
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setFilteredPlayers(
      players.filter(
        (player) =>
          player.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.second_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const searchPlayers = (players) => {
    return players.filter((player) => {
      return (
        player.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.second_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const addPlayerToTeam = (player) => {
    if (
      budget - player.now_cost >= 0 &&
      team.length < 15 &&
      team.indexOf(player) === -1
    ) {
      setTeam([...team, player]);
      setBudget(budget - player.now_cost);
    }
  };

  const removePlayerFromTeam = (player) => {
    setTeam(team.filter((p) => p.id !== player.id));
    setBudget(budget + player.now_cost);
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
      router.push("http://localhost:5000/createteam");
    }
  };

  return (
    <div>
      <h1>Create Team</h1>
      <h2>Available Budget: ${budget}</h2>
      <input
        type="text"
        placeholder="Search Players"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="range"
        min={0}
        max={500}
        step={0.5}
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <span>Minimum Price: ${minPrice} </span>
      <input
        type="range"
        min={0}
        max={500}
        step={0.5}
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <span>Maximum Price: ${maxPrice}</span>
      <br />

      <button onClick={searchPlayers}>Search</button>
      <br />

      <h2>Players:</h2>
      <ul>
        {filteredPlayers
          .filter(
            (player) =>
              player.now_cost >= minPrice && player.now_cost <= maxPrice
          )
          .map((player) => (
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
            {player.first_name} {player.second_name} - ${player.now_cost}
            <button onClick={() => removePlayerFromTeam(player)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleConfirmTeam}>Confirm Team</button>
    </div>
  );
}

export default createTeam;
