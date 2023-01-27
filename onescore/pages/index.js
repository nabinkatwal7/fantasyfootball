import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Homepage from '../components/Homepage/Homepage'

import LiveScore from './livescore/index'


export default function Home() {
  return (
    <>
      <LiveScore />
    </>
  )
}
