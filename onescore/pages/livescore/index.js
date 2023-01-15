import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'


function index() {

  // const [scores, setScores] = useState([]);
  // useEffect(()=>{

  //   const options = {
  //     method: 'GET',
  //     headers:{
  //       'X-RapidAPI-Key': '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b',
	// 	    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
  //     }
  //   }

  //   async function fetchScores(){
  //     const response = await fetch('https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1', options)
  //     const result = await response.json();
  //     console.log(result)
  //     await setScores(result.data);
  //   }
  //   fetchScores()
  // },[])

  return (
    <div className='live' >
      <div className='sidebar'>
        <h2>Top Leagues</h2>
        <ul className='top-leagues'>
          <li>
            <Link href='#' >Premier League</Link>
          </li>
          <li>
            <Link href='#' >Champions league</Link>
          </li>
          <li>
            <Link href='#' >Europa League</Link>
          </li>
          <li>
            <Link href='#' >LaLiga</Link>
          </li>
          <li>
            <Link href='#' >Ligue 1</Link>
          </li>
          <li>
            <Link href='#' >Bundesliga</Link>
          </li>
          <li>
            <Link href='#' >Serie A</Link>
          </li>
        </ul>
      </div>
      <div className='scores' >
        <h1>Scores</h1>
        <div className='league' >
          <h4>Spain - La Liga</h4>
          <div className='scorecard' >
            <p className='home' >Espanyol</p><p className='score' >2-2</p><p className='away' >Girona</p>
            <p className='time' >FT</p>
          </div>
          <div className='scorecard' >
            <p className='home' >Atletico Madrid</p><p className='score' >-</p><p className='away' >Barcelona</p>
            <p className='time' >TBD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index