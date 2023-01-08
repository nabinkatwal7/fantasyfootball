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
  //     console.log(scores)
  //   }
  //   fetchScores()
  // },[])
  return (
    <div>
      <div className='sidebar'>
        <div  className='league-list' >
        <h2>Top Leagues</h2>
        </div>
        <ul className='top-leagues'>
          <li>
            <Link href='#' >Premier League</Link>
          </li>
          <li>
            <Link href='#' >Champions league</Link>
          </li>
          <li>
            <Link href='#' >LaLiga</Link>
          </li>
          <li>
            <Link href='#' >French League</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default index