import React, { Component } from "react";
import Slider from "react-slick";
import harvard from "../../assets/harvard.png"
import dartmouth from "../../assets/dartmouth.png"
import berkeley from "../../assets/berkeley.png"
import georgiatech from "../../assets/georgiatech.png"
import nyu from "../../assets/nyu.png"
import virginiatech from "../../assets/virginiatech.png"
import ucla from "../../assets/ucla.png"
import brown from "../../assets/brown.png"
import "./LogoCarousel.css"



export const LogoCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
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
              <img src={dartmouth}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={berkeley}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={georgiatech}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={nyu}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={virginiatech}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={ucla}/>
            </div>
            <div className='logo-carousel-image'>
              <img src={brown}/>
            </div>
            
          </Slider>
          </div>
      );
    }

export default LogoCarousel ;