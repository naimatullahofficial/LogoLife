import React from 'react'
import './styles/fonts.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import HeroFacts from './Components/HeroFacts/HeroFacts';

export const App = () => {
  return (
    //  <div className='container'>
      
    //  </div>

    <div>
      <Navbar />
      <Hero />
      <HeroFacts />
    </div>
  )
}


export default App;