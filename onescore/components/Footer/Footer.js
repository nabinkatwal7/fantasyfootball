import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer' >
        <p>&#169; OneScore 2023</p>
        <Link href='https://github.com/nabinkatwal7/fantasyfootball' >
          <img src='https://img.icons8.com/ios-glyphs/512/github.png' />
        </Link>
    </div>
  )
}

export default Footer