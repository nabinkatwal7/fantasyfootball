import React from 'react'
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div>
        <h1>Nav</h1>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Log In</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
    </div>
  )
}

export default Navigation