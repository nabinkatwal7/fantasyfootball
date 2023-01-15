import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import '../styles/FantasyHome.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
