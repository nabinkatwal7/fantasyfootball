import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Container, Table, Button } from "react-bootstrap";

function LeagueID() {
  const router = useRouter();
  const { lid } = router.query;
  const [league, setLeague] = useState(null);

  useEffect(() => {
    async function fetchLeague() {
      try {
        const response = await fetch(
          `http://localhost:5000/leagues?name=${lid}`
        );
        const data = await response.json();
        data.map((l)=>{
          if(lid == l.name){
            setLeague(l)
          }
        })
      } catch (error) {
        console.error(error);
      }
    }
    fetchLeague();
  }, []);

  console.log(league)

  // function filterActiveLeague() {
  //   if (league) {
  //     league.map((l) => {
  //       if(lid == l.name){
  //         setActiveLeague(l)
  //       }
  //     });
  //   }
  // }

  // filterActiveLeague()

  async function joinLeague() {
    try {
      const teamname = sessionStorage.getItem("teamname");
      const points = sessionStorage.getItem("points");
      const response = await fetch(
        `http://localhost:5000/leagues/${lid}/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teamname: teamname,
            points: points, // replace with actual user info
          }),
        }
      );
      const data = await response.json();
      setLeague(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!league) {
    return <div className="team-container">Loading...</div>;
  }

  console.log(league.teams)

  return (
    <Container className="team-container">
      <h1>{league.name}</h1>
      <Button onClick={joinLeague}>Join League</Button>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {league.teams.map((team) => (
            <tr key={team.name}>
              <td>{team.teamname}</td>
              <td>{team.point}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default LeagueID;
