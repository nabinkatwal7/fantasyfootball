import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Response from "../../public/response.json";

function Index() {
  const [livescores, setLivescores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/livescore")
      .then((res) => res.json())
      .then((data) => setLivescores(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="livescore">
      {livescores.map((livescore) => (
        <div key={livescore.index} className="livescorecard">
          <div className="country">
            <img
              className="country-flag"
              src={livescore.area.flag}
              alt="country flag"
            />
            <p className="country-name">{livescore.area.name}</p>
          </div>
          <div className="league">
            <img
              className="league-logo"
              src={livescore.competition.emblem}
              alt="league-logo"
            />
            <p className="league">{livescore.competition.name}</p>
            <p className="current-matchday">
              Matchday: {livescore.season.currentMatchday}
            </p>
          </div>
          <div className="score">
            <img
              className="home-team-img"
              src={livescore.homeTeam.crest}
              alt="home team"
            />
            <p className="home-team">{livescore.homeTeam.name}</p>
            <p className="score-home-ht">
              HT {livescore.score.halfTime.home} :
            </p>
            <p className="score-home-ft">
              FT {livescore.score.fullTime.home} :
            </p>

            <img
              className="away-team-img"
              src={livescore.awayTeam.crest}
              alt="away team"
            />
            <p className="away-team">{livescore.awayTeam.name}</p>
            <p className="score-away-ht">{livescore.score.halfTime.away}</p>
            <p className="score-away-ft">{livescore.score.fullTime.away}</p>
            <p className="winner">W: {livescore.score.winner}</p>
            <p className="time">{livescore.score.duration}</p>
          </div>
          <div className="referee">
            <p className="referee-name">{livescore.referees.name}</p>
            <p>{livescore.referees.nationality}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
