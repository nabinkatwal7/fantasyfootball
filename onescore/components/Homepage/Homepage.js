// export async function getStaticProps(){
//   const leagueIds = [2021, 2014, 2015, 2002, 2016];

//   const standing = async () => {
  
//     const requests = leagueIds.map(id => 
//       fetch(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${id}`, {
//         headers: {
//           'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
//           'x-rapidapi-key': '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b'
//         }
//       })
//     )
//     const res = await Promise.all(requests)
//     const json = await res.map(response => response.json())
//     return { standings: json.map(data => data.api.standings) }
// }

function Homepage() {

  // const leagueIds = [2021, 2014, 2015, 2002, 2016];

  // const standing = async () => {
  
  //   const requests = leagueIds.map(id => 
  //     fetch(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${id}`, {
  //       headers: {
  //         'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  //         'x-rapidapi-key': '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b'
  //       }
  //     })
  //   )
  //   const res = await Promise.all(requests)
  //   const json = await res.map(response => response.json())
  //   return { standings: json.map(data => data.api.standings) }

  // const requests = async leagueIds.map(id => 
  //   fetch(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${id}`, {
  //     headers: {
  //       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  //       'x-rapidapi-key': '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b'
  //     }
  //   })
  // )
  // const res = await Promise.all(requests)
  // const json = await res.map(response => response.json())
  // return { standings: json.map(data => data.api.standings) }

  return (
    <div className="standings-container">
    {/* {props.standings.map((standing, index) => (
      <div key={index}>
        <h2 className="league-name">{standing.league.name}</h2>
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>Position</th>
              <th className="team-name">Team Name</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {standing.table.map((team, index) => (
              <tr key={index}>
                <td className="team-position">{team.position}</td>
                <td className="team-name">{team.team.name}</td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalDifference}</td>
                <td>{team.points}</td>
              </tr>
              ))}
              </tbody>
            </table>
          </div>
        ))} */}
      </div>
  )
}

export default Homepage
