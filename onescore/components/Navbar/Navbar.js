import Link from 'next/link'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NfcIcon from '@mui/icons-material/Nfc';
import Nfc from '@mui/icons-material/Nfc';

function Navbar() {
  return (
    <div className='navbar' >
        <ul>
            <li>
                <Link href='/' >
                    <HomeIcon/>
                    Home
                </Link>
            </li>
            <li>
                <Link href='/livescore' >
                    <SportsSoccerIcon />
                    Live Score
                </Link>
            </li>
            <li>
                <Link href='/fantasy' >
                    <NfcIcon />
                    Fantasy
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar