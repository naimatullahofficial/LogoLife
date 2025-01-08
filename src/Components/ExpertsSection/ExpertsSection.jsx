import React from 'react'
import "./ExpertsSection.css"
import expert_3 from "../../assets/client-1.png"
import expert_5 from "../../assets/client-2.png"
import expert_1 from "../../assets/client-3.png"
import expert_2 from "../../assets/client-4.png"
import expert_6 from "../../assets/client-5.png"
import expert_7 from "../../assets/client-6.png"
import expert_4 from "../../assets/client-7.png"
import harvard from "../../assets/harvard.png"
import brown from "../../assets/brown.png"
import netflix from "../../assets/netflix.png"
import apple from "../../assets/Apple.png"
import mcKinsey from "../../assets/Mckinsey.png"
import columbia from "../../assets/columbia.png"
import ExpertsCarousel from '../ExpertsCarousel/ExpertsCarousel'




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
        
    
    </div>
    
  )
}

export default ExpertsSection;
