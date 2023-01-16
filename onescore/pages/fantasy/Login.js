import Link from 'next/link'
import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add code to handle form submission here
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Log In</h2>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button className="submit-button" type="submit">Log In</button>
      <p className="account-info">Do not have an account? 
      <Link href="/fantasy/Signup" className="signup-link">Sign up instead</Link></p>
    </form>
  )
}

export default Login