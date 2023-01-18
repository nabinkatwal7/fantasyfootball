import React,{useState, useEffect} from 'react'

function createTeam() {

  const [players, setPlayers] = useState([
    { name: 'Lionel Messi', position: 'Forward' },
    { name: 'Cristiano Ronaldo', position: 'Forward' },
    { name: 'Neymar Jr.', position: 'Forward' },
    { name: 'Kevin De Bruyne', position: 'Midfield' },
    { name: 'Luka Modric', position: 'Midfield' },
    { name: 'Kylian Mbappé', position: 'Forward' },
    // Add more players as needed
  ])
  const [onFieldPlayers, setOnFieldPlayers] = useState([
    { name: 'Jan Oblak', position: 'Goalkeeper' },
    { name: 'Trent Alexander-Arnold', position: 'Right-Back' },
    { name: 'Virgil van Dijk', position: 'Center-Back' },
    { name: 'Sergio Ramos', position: 'Center-Back' },
    { name: 'Marcelo', position: 'Left-Back' },
    { name: 'Luka Modric', position: 'Center-Midfield' },
    { name: 'Kevin De Bruyne', position: 'Right-Midfield' },
    { name: 'Cristiano Ronaldo', position: 'Left-Forward' },
    { name: 'Lionel Messi', position: 'Center-Forward' },
    { name: 'Neymar Jr.', position: 'Right-Forward' },
  ])
  const [benchPlayers, setBenchPlayers] = useState([
    { name: 'Thibaut Courtois', position: 'Goalkeeper' },
    { name: 'João Cancelo', position: 'Right-Back' },
    { name: 'Raphael Varane', position: 'Center-Back' },
    { name: 'Ferland Mendy', position: 'Left-Back' },
    { name: 'Casemiro', position: 'Center-Midfield' },
  ])

  const handlePlayerSelect = (player) => {
    if (onFieldPlayers.length < 11) {
      setOnFieldPlayers([...onFieldPlayers, player])
    } else if (benchPlayers.length < 5) {
      setBenchPlayers([...benchPlayers, player])
    }
  }

  const handlePlayerRemove = (player) => {
    setOnFieldPlayers(onFieldPlayers.filter(p => p !== player))
    setBenchPlayers(benchPlayers.filter(p => p !== player))
  }

  // const fetchPlayers = async () => {
  //   const response = await fetch('http://your-server-url/api/players')
  //   const data = await response.json()
  //   setPlayers(data)
  // }

  // useEffect(() => {
  //   fetchPlayers()
  // }, [])

  return (
    <div className="create-team-container">
      <div className="player-list-container">
        <h2>Player List</h2>
        {players.map((player, index) => (
          <div className="player-card" key={index} onClick={() => handlePlayerSelect(player)}>
            <p>{player.name}</p>
            <p>{player.position}</p>
          </div>
        ))}
      </div>
      <div className="football-field-container">
        <h2>Football Field</h2>
        <div className="on-field-players-container">
          {onFieldPlayers.map((player, index) => (
            <div className="player-card" key={index} onClick={() => handlePlayerRemove(player)}>
              <p>{player.name}</p>
              <p>{player.position}</p>
            </div>
          ))}
        </div>
        <div className="bench-players-container">
          {benchPlayers.map((player, index) => (
            <div className="player-card" key={index} onClick={() => handlePlayerRemove(player)}>
              <p>{player.name}</p>
              <p>{player.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default createTeam