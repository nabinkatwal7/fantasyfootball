import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className='navbar' >
        <ul>
            <li>
                <Link href='/' >Home</Link>
            </li>
            <li>
                <Link href='/livescore' >Live Score</Link>
            </li>
            <li>
                <Link href='/fantasy' >Fantasy</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar