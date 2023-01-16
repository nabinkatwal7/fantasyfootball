import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'


function index() {

  const [scores, setScores] = useState([])
  const [selectedLeague, setSelectedLeague] = useState('England')
  
  // API Key for sportscore1
  // const API_KEY = '7fa2c59a1cmsh4203229b559d2f2p176881jsn45a4b618065b'

  useEffect(() => {
    const fetchScores = async () => {
      const res = await fetch(`https://raw.githubusercontent.com/statsbomb/open-data/master/data/11.json`)
      const data = await res.json()
      //Filter the data for only the live matches
      const liveMatches = data.filter(match => match.match_status === "live")
      setScores(liveMatches)
    }
    fetchScores()
  }, [selectedLeague])

  return (
    <div className="livescore-container">
      <div className="left-bar">
        <h2 className="bar-title">Select a league</h2>
        <button className={`league-button ${selectedLeague === 'England' ? 'selected' : ''}`} onClick={() => setSelectedLeague('England')}>England</button>
        <button className={`league-button ${selectedLeague === 'Spain' ? 'selected' : ''}`} onClick={() => setSelectedLeague('Spain')}>Spain</button>
        <button className={`league-button ${selectedLeague === 'France' ? 'selected' : ''}`} onClick={() => setSelectedLeague('France')}>France</button>
        <button className={`league-button ${selectedLeague === 'Germany' ? 'selected' : ''}`} onClick={() => setSelectedLeague('Germany')}>Germany</button>
        <button className={`league-button ${selectedLeague === 'Italy' ? 'selected' : ''}`} onClick={() => setSelectedLeague('Italy')}>Italy</button>
        </div>
          <div className="scores-container">
            {scores.map((score, index) => (
              <div className="score-card" key={index}>
                <div className="team-name">{score.home_team}</div>
                <div className="score">{score.home_score} - {score.away_score}</div>
                <div className="team-name">{score.away_team}</div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default index