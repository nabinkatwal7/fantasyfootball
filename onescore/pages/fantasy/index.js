import Link from "next/link";
import { useEffect, useState } from "react";

import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import PersonIcon from "@mui/icons-material/Person";
import Groups3Icon from "@mui/icons-material/Groups3";
import LogoutIcon from "@mui/icons-material/Logout";

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="home-page-container">
      <div className="header">
        {/* <h1 className="title">Welcome to OneScore Fantasy Football!</h1> */}
        {isLoggedIn && (
          <nav className="fantasy-nav">
            <Link
              className="fantasy-links"
              href="/fantasy/createTeam"
              className="nav-link"
            >
              <AddBoxIcon />
              Create Team
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewTeams"
              className="nav-link"
            >
              <ViewDayIcon />
              View Teams
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewPlayers"
              className="nav-link"
            >
              <PersonIcon />
              View Players
            </Link>
            <Link
              className="fantasy-links"
              href="/fantasy/viewLeagues"
              className="nav-link"
            >
              <Groups3Icon />
              View Leagues
            </Link>
          </nav>
        )}
        <div className="auth-actions">
          {isLoggedIn ? (
            <button className="auth-link" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <div className='auth-actions'>
              <Link href="/fantasy/Login" className="auth-link">
                Log In
              </Link>
              <Link href="/fantasy/Signup" className="auth-link">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="section-container">
        
      </div>
    </div>
  );
}

export default index;
