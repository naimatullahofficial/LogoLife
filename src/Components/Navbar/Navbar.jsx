import React, {useState, useEffect} from 'react'
import logo from "../../assets/logo-life.svg"
import "./Navbar.css"

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=> {

    window.addEventListener("scroll", ()=>{
      window.scrollY > 200 ? setSticky(true) : setSticky(false)
      console.log("scrolled");
      
    })
  }, [])



  return (
        <nav className={`navbar ${sticky ? '' : 'hidden'}`}>
            <img type="image/svg+xml" src={logo} /> 
            <a href="#calendly">
              <button type="button" className="dark-btn">Book Consultation</button>
            </a>

        </nav>
  )
}


export default Navbar;
