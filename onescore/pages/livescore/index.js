import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import Response from "../../public/response.json";

function Index() {
  // const [livescores, setLivescores] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/livescore')
  //     .then(res => res.json())
  //     .then(data => setLivescores(data))
  //     .catch(err => console.log(err));
  // }, []);

  const livescores = Response;

  return (
    <div className='livescore'>
      {livescores.map((livescore) => (
        <div key={livescore.id}>
          <p>Matchday: {livescore.season.currentMatchday}</p>
          <p>UTC Date: {livescore.utcDate}</p>
          <p>Status: {livescore.status}</p>
          <p>Matchday: {livescore.matchday}</p>
          <p>Stage: {livescore.stage}</p>
          <p>Group: {livescore.group}</p>
          <p>
            Score: {livescore.score.fullTime.homeTeam} -{" "}
            {livescore.score.fullTime.awayTeam}
          </p>
          <p>Home Team: {livescore.homeTeam.name}</p>
          <p>Away Team: {livescore.awayTeam.name}</p>
          <p>
            Referees:{" "}
            {livescore.referees.map((referee) => referee.name).join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Index;
