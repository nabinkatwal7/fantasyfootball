import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from 'next/router'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (redirect) {
    const router = useRouter()
    router.push('/fantasy')
    }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Pick up where you left</h2>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button className="submit-button" type="submit">
        Log In
      </button>
      <p className="account-info">
        Do not have an account?
        <Link href="/fantasy/Signup" className="signup-link">
          Sign up instead
        </Link>
      </p>
    </form>
  );
}


export default Login;
