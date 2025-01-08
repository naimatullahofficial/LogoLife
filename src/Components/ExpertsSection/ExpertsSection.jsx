import React from 'react'
import "./ExpertsSection.css"
import ExpertsCarousel from '../ExpertsCarousel/ExpertsCarousel'
import universties_list_desktop from "../../assets/universties-list.svg"




export const ExpertsSection = () => {
  return (
    <div className='experts-section'>
        <div className='main-container experts'> 
            <div className='experts-heading-container'>
                <p className='subtitle'>The AcceptedX Multiplier</p>
                <h2><span className='facts'>7-12x </span>Chances of Admission By Working <br/>With the <span className='experts'> Experts </span></h2>
        
            </div>
        
        </div>

        <div>
            <ExpertsCarousel />
        </div>

        <div className='universties-list'>
            <img src={universties_list_desktop}/>
        </div>
        
    
    </div>
    
  )
}

export default ExpertsSection;
