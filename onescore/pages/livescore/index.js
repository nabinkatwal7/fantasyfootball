import React from "react";
import { useState, useEffect } from "react";

// import Clock from "react-live-clock";

import Card from "react-bootstrap/Card";

function Index() {
  const [livescores, setLivescores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/livescore")
      .then((res) => res.json())
      .then((data) => setLivescores(data))
      .catch((err) => console.log(err));
  }, []);

  function dateTime(utcDate){
    var localDate = new Date(utcDate).toString()
    return localDate.slice(0,28)
  }
 
  return (
    <div className="livescore">
      {/* <Clock/> */}
      <h3 className="matchestoday">Matches today:</h3>
      {/* <div className="livescorecard ">
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img
            variant="top"
            src="https://library.sportingnews.com/2021-12/uefa-europa-league-logo-2021_1sdkzv2yss40n14yf8jc0df72s.jpg"
          />
          <Card.Body>
            <b>Europe</b>
            <Card.Title>Europa League</Card.Title>
            <Card.Text>
              <div className="score">
                <div className="home-team">
                  <p>Manchester United</p>
                  <img
                    className="home-team-img"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                    alt="home team"
                  />
                  -
                </div>
                <div className="away-team">
                  <img
                    className="away-team-img"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/800px-Real_betis_logo.svg.png"
                    alt="away team"
                  />
                  <p>Real Betis</p>
                </div>
              </div>
              <p>1:45 AM</p>
              <p>Matchday: Round of 16</p>
              <p className="winner">W: Not Played</p>
              <p className="time">Not Started</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div> */}
      {livescores.map((livescore) => (
        <div key={livescore.index} className="livescorecard ">
          <Card style={{ width: "22rem", height: "42rem" }}>
            <Card.Img variant="top" src={livescore.competition.emblem} />
            <Card.Body>
              <b>{livescore.area.name}</b>
              <Card.Title>{livescore.competition.name}</Card.Title>
              <Card.Text>
                <div className="score">
                  <div className="home-team">
                    <p>{livescore.homeTeam.name}</p>
                    <img
                      className="home-team-img"
                      src={livescore.homeTeam.crest}
                      alt="home team"
                    />
                    {livescore.score.fullTime.home}-
                  </div>
                  <div className="away-team">
                    {livescore.score.fullTime.away}
                    <img
                      className="away-team-img"
                      src={livescore.awayTeam.crest}
                      alt="away team"
                    />
                    <p>{livescore.awayTeam.name}</p>
                  </div>
                </div>
                <p>{dateTime(livescore.utcDate)}</p>
                <p>Matchday: {livescore.season.currentMatchday}</p>
                <p className="winner">W: {livescore.score.winner}</p>
                <p className="time">{livescore.score.duration}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Index;
