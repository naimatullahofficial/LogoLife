import React from 'react'
import Slider from "react-slick";
import "./TestimonialCarousel.css"
import "./TestimonialCarousel.css"
import review_stars from "../../assets/review-stars.svg"
import play_icon from "../../assets/white-play-icon.png"

export const TestimonialCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
          <div className='testimonial-slider-container'>
              <Slider {...settings}>

              <div className='testimonial-section'>
                <div className='testimonial-carousel'>
                  <img  src={review_stars}/>
                  <p>“Kyle at LogoLife is a very knowledgeable tutor with a unique ability to pay meticulous attention to details that can make a huge difference when applying to your dream school. Kyle was able to guide me through the process of constructing and elevating my college essay to a much high standard. I strongly recommend Kyle to anyone who is serious about applying and getting accepted to highly completive school/college.”</p>
                  <h2>Kiran Desai</h2>
                  <p className='subTitle'>UC Berkeley</p>
                </div>
              </div>

              <div className='testimonial-section'>
                <div className='testimonial-carousel video-carousel chloe'>
                  <img className="video-play-icon" src={play_icon} />
                  <h2>Kiran Desai</h2>
                  <p className='subTitle'>UC Berkeley</p>
                  <img  src={review_stars}/>
                </div>
              </div>

              <div className='testimonial-section'>
                <div className='testimonial-carousel'>
                  <img  src={review_stars}/>
                  <p>“Kyle at LogoLife is a very knowledgeable tutor with a unique ability to pay meticulous attention to details that can make a huge difference when applying to your dream school. Kyle was able to guide me through the process of constructing and elevating my college essay to a much high standard. I strongly recommend Kyle to anyone who is serious about applying and getting accepted to highly completive school/college.”</p>
                  <h2>Kiran Desai</h2>
                  <p className='subTitle'>UC Berkeley</p>
                </div>
                </div>

                <div className='testimonial-section'>
                <div className='testimonial-carousel video-carousel zara'>
                  <img className="video-play-icon" src={play_icon} />
                  <h2>Kiran Desai</h2>
                  <p className='subTitle'>UC Berkeley</p>
                  <img  src={review_stars}/>
                </div>
              </div>

              <div className='testimonial-section'>
                <div className='testimonial-carousel'>
                  <img  src={review_stars}/>
                  <p>“Kyle at LogoLife is a very knowledgeable tutor with a unique ability to pay meticulous attention to details that can make a huge difference when applying to your dream school. Kyle was able to guide me through the process of constructing and elevating my college essay to a much high standard. I strongly recommend Kyle to anyone who is serious about applying and getting accepted to highly completive school/college.”</p>
                  <h2>Kiran Desai</h2>
                  <p className='subTitle'>UC Berkeley</p>
                </div>
                </div>
              
              </Slider>
          </div>
        </div>
      );
    }

export default TestimonialCarousel;