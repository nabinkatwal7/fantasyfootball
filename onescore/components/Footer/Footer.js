import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer' >
        <p>&#169; OneScore 2023</p>
        <Link href='https://github.com/nabinkatwal7/fantasyfootball' >
          <img src='https://img.icons8.com/ios-glyphs/512/github.png' />
        </Link>
        <Link href='https://twitter.com/campistaaaaa' >
          <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' />
        </Link>
        <Link href='https://nabinkatwal7.github.io/portfolio/?fbclid=IwAR0eL6yqyQiOVbkD8nfVXvRC-aTP6OXNXjLjGaTkiWsSU7tCEgdpyX-f6IA' >
          <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-web-logo-clip-art-clkerm-vector-clip-art-online-11.png' />
        </Link>
    </div>
  )
}

export default Footer