import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">
            <p>NTB</p>
        </div>
        <nav>
            <Link className='nav-link' href={"/"}>Home</Link>
            <Link className='nav-link' href={"/"}>About</Link>
            <Link className='nav-link' href={"/"}>Places to go</Link>
            <Link className='nav-link' href={"/"}>Guides</Link>
            <Link className='nav-link' href={"/"}>Festivals & events</Link>
            <Link className='nav-link' href={"/"}>Resturant</Link>
        </nav>
         <Link className='Contact-us-page'  href={"/Contact"}>Contact Us</Link>
    </header>
  )
}

export default Header
