import React from 'react'

import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {

  return (
    <div>
    <nav className="navbar">
        <h2 className='bar'>
          <Link to='/'>
            Miguel Antonio
          </Link>
        </h2>
      <h2>
        <Link to='/'>
          Home
        </Link>
      </h2>
      <h2>
        <Link to='/sobre'>Sobre</Link>
      </h2>
      <h2>
        <Link to='/projetos'>Projetos</Link>
      </h2>
    </nav>
    </div>
  )
}

export default Navbar;