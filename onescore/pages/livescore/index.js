import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'


function Index() {

  const [livescores, setLivescores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/livescore')
      .then(res => res.json())
      .then(data => setLivescores(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {livescores.map(livescore => (
        console.log(livescore)
      ))}
    </div>
  )
}

export default Index