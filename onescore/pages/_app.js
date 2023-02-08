import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import '../styles/FantasyHome.css'
import '../components/Homepage/Homepage.css'
import './fantasy/Signup.css'
import './fantasy/Login.css'
import './fantasy/createTeam.css'
import './fantasy/viewLeagues.css'
import './livescore/index.css'
import './fantasy/viewPlayers.css'
import './fantasy/player/pid.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
