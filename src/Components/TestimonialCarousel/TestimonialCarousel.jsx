import React from 'react'
import Slider from "react-slick";
import harvard from "../../assets/harvard.png"
import dartmouth from "../../assets/dartmouth.png"
import berkeley from "../../assets/berkeley.png"
import georgiatech from "../../assets/georgiatech.png"
import nyu from "../../assets/nyu.png"
import virginiatech from "../../assets/virginiatech.png"
import ucla from "../../assets/ucla.png"
import brown from "../../assets/brown.png"
import "./TestimonialCarousel.css"



export const TestimonialCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className='logo-carousel-image'>
              <img src={harvard}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={harvard}/>
            </div>

            <div className='logo-carousel-image'>
              <img src={harvard}/>
            </div>

            <div className='logo-carousel-image'>
              <img src={harvard}/>
            </div>

            <div className='logo-carousel-image'>
              <img src={harvard}/>
            </div>
            
          </Slider>
        </div>
      );
    }

export default TestimonialCarousel;