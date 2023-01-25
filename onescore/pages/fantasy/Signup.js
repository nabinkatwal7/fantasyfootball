import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [status, setStatus] = useState()
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(()=>{
    if(status === 'success'){
      router.push('/fantasy/Login')
    }
  },[status])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*" 
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert('Successfully registered');
      }
      if (response.ok){
        setStatus('success')
      }else{
        setStatus('error')
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordStrength(CheckPassword(e.target.value));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="signupdiv">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
             type="text"
             name="username"
             value={formData.username}
             onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="repeat-password">Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Sign Up
        </button>
        <p className="account-info">
          Already have an account?
          <Link href="/fantasy/Login" className="login-link">
            Log In instead
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
