import React, {useState, useEffect} from 'react'
import logo from "../../assets/logo-life-new.svg"
import "./Navbar.css"

const Navbar = () => {
  useEffect(()=> {

    window.addEventListener("scroll", ()=>{
      const navbar = document.querySelector(".navbar")
      window.scrollY > 200 ? navbar.style.top = "0%" : navbar.style.top = "-10%"
      console.log("scrolled");
      
    })
  }, [])



  return (
        <nav className="navbar" >
          <img src={logo} />
            <a href="#calendly">
              <button type="button" className="dark-btn">Book Consultation</button>
            </a>

        </nav>
  )
}


export default Navbar;
