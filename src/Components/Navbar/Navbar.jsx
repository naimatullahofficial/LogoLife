import React from 'react'
import logo from "../../assets/logo-life.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
        <nav className='navbar container'>
            <img type="image/svg+xml" src={logo} /> 
            <button className='dark-btn'>
                Book Consultation

            </button>
        </nav>
  )
}


export default Navbar;
