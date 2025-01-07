import React from 'react'
import "./TestimonialSection.css"
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel"
import review_stars from "../../assets/review-stars.svg"
import play_icon from "../../assets/white-play-icon.png"
import chloe from "../../assets/chloe.png"
import zara_img from "../../assets/Zara.png"


export const TestimonialSection = () => {
  return (
    <div className='main-container'>

        <section className='testimonials-secttion'>
            <div className='top-container'>
                <p className='testimonial-paragraph'>Testimonials</p>
                <h1>Hear From Students Who Made It<br/>To Their <span>Dream Schools</span></h1>
            </div>

            <div className='bottom-container'>
                <div className='testimonial-carousel'>
                    <img  src={review_stars}/>
                    <p>“Kyle at LogoLife is a very knowledgeable tutor with a unique ability to pay meticulous attention to details that can make a huge difference when applying to your dream school. Kyle was able to guide me through the process of constructing and elevating my college essay to a much high standard. I strongly recommend Kyle to anyone who is serious about applying and getting accepted to highly completive school/college.”</p>
                    <h2>Kiran Desai</h2>
                    <p className='subTitle'>UC Berkeley</p>
                 </div>

                 <div className='testimonial-carousel video-carousel chloe'>
                    <img className="video-play-icon" src={play_icon} />
                    <h2>Kiran Desai</h2>
                    <p className='subTitle'>UC Berkeley</p>
                    <img  src={review_stars}/>
                 </div>

                 <div className='testimonial-carousel video-carousel zara'>
                    <img className="video-play-icon" src={play_icon} />
                    <h2>Kiran Desai</h2>
                    <p className='subTitle'>UC Berkeley</p>
                    <img  src={review_stars}/>
                 </div>



            </div>
        </section>

    </div>
  )
}


export default TestimonialSection;