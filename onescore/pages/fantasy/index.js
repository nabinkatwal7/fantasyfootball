import Link from "next/link"

function index() {
  return (
    <div className="home-page-container" >
      <div className="header">
        <h1 className="title" >Welcome to OneScore Fantasy Football!</h1>
        <nav>
          <Link href='/fantasy/createTeam' className="nav-link" >
            Create Team
          </Link>
          <Link href='/fantasy/viewTeams' className="nav-link" >
            View Teams
          </Link>
          <Link href='/fantasy/viewPlayers' className="nav-link" >
            View Players
          </Link>
          <Link href='/fantasy/viewLeagues' className="nav-link" >
            View Leagues
          </Link>
        </nav>
        <div className="auth-actions" >
          <Link href='/fantasy/Login' className="auth-link" >
            Log In
          </Link>
          <Link href='/fantasy/Signup' className="auth-link" >
            Sign Up
          </Link>
        </div>
        <div className="section-container">
          <section className="top-players">
            <h2 className="section-title" >Top Players</h2>
            <ul className="players-list">
              <li>Lionel Messi</li>
              <li>Cristiano Ronaldo</li>
              <li>Neymar Jr</li>
            </ul>
          </section>
          <section className="top-teams">
            <h2 className="section-title">Top Teams</h2>
            <ul className="teams-list">
              <li>Manchester City</li>
              <li>Liverpool</li>
              <li>Arsenal</li>
          </ul>
        </section>
        </div>
      </div>
    </div>
  )
}

export default index