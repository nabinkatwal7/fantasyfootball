import React from 'react'
import {useState, useEffect} from 'react'


function index() {

  const [scores, setScores] = useState([]);
  useEffect(()=>{

    const options = {
      method: 'GET',
      headers:{
        'X-RapidAPI-Key': '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b',
		    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
      }
    }

    async function fetchScores(){
      const response = await fetch('https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1', options)
      const result = await response.json();
      console.log(result)
      await setScores(result.data);
      console.log(scores)
    }
    fetchScores()
  },[])
  return (
    <div>
      {/* {scores.map((score) => (
        <div key={score.id}>
          <h2>{score.homeTeam.name}</h2>
          <p>{score.homeTeam.score}</p>
          <h2>{score.awayTeam.name}</h2>
          <p>{score.awayTeam.score}</p>
        </div>
      ))} */}
    </div>
  )
}

export default index