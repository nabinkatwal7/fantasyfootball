import React from 'react'
import {useState, useEffect} from 'react'


function index() {

  const [scores, setScores] = useState([]);
  useEffect(()=>{
    async function fetchScores(){
      const response = await fetch('http://api.football-data.org/v4/matches',{
        headers:{
          'X-Auth-Token':'1e33c4d0fa0a4345a5a1182e6ca9ac5a',
          'Access-Control-Allow-Origin':'*'
        }
      })
      const data = await response.json()
      setScores(data.matches)
      console.log(data)
    }
    fetchScores()
  },[])
  return (
    <div>
      {scores.map((score)=>{
        <div key={score.id}>
          <h2>{score.homeTeam.name}</h2>
          <p>{score.score.fullTime.homeTeam}</p>
          <h2>{score.awayTeam.name}</h2>
          <p>{score.score.fullTime.awayTeam}</p>
        </div>
      })}
    </div>
  )
}

export default index