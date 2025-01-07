import React from 'react'
import './styles/fonts.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import HeroFacts from './Components/HeroFacts/HeroFacts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCarousel from './Components/LogoCarousel/LogoCarousel';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFacts />
      <LogoCarousel />
    </div>
  )
}


export default App;