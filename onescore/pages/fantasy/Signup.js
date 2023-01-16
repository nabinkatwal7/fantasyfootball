import {React, useState} from 'react'
import Link from 'next/link'

function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  return (
    <div className='signupdiv'>
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign Up</h2>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="repeat-password">Repeat Password</label>
        <input type="password" id="repeat-password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} required />
      </div>
      <button className="submit-button" type="submit">Sign Up</button>
      <p className="account-info">Already have an account? 
      <Link href="/fantasy/Login" className="login-link">Log In instead</Link></p>
    </form>
    </div>
  )
}

export default Signup