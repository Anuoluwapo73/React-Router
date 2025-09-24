import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <h1>Navigation</h1>
        <ul className='list'>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar