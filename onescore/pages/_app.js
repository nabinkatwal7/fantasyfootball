import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import '../styles/FantasyHome.css'
import '../components/Homepage/Homepage.css'
import './fantasy/Signup.css'
import './fantasy/Login.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
