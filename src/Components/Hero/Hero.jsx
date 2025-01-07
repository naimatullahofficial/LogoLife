import React from 'react'
import "./Hero.css"
import hero_video_overlay from "../../assets/hero-video-overlay.png"
import play_icon from "../../assets/Play-Button.png"
import review_logo from "../../assets/review-logo.png"
import background_overlay from "../../assets/hero-overlay.png"

export const Hero = () => {
  return (

        <div className='main-container dark-color'>
          <section className='hero-section '>
            <div className='left-container'>
                <button className='parent-btn'>Parents</button>
                <h1 className='hero-heading'>98% Acceptance to Top<br/> <span className='hero-gradient-h1'> Computer Science</span> and<br /> <span className='hero-gradient-h1'>Tech Programs</span> </h1>
                <img className='review-logo' src={review_logo}></img>
                <button className='consultation-btn'>Book Consultation</button>
            </div>
            <div className='right-container'>

            <img src={hero_video_overlay} className='hero-video-img' />
            <img src={play_icon} className='play-icon'/>

            </div>
        </section>
        </div>
  )
}


export default Hero;
