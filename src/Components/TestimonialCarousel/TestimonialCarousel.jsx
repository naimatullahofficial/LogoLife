import React from 'react'
import Slider from "react-slick";
import "./TestimonialCarousel.css"
import "./TestimonialCarousel.css"
import review_stars from "../../assets/review-stars.svg"
import play_icon from "../../assets/white-play-icon.png"

export const TestimonialCarousel = () => {
    var settings = {
        dots: false,
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
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
                  <h2>Chloe Perez</h2>
                  <p className='subTitle'>Stanford University</p>
                  <img  src={review_stars}/>
                </div>
              </div>

              <div className='testimonial-section'>
                <div className='testimonial-carousel'>
                  <img  src={review_stars}/>
                  <p>“When I first started looking into college applications, I felt overwhelmed. LogoLife's College Counseling was recommended by a family friend, and from my first meeting with my counselor, I knew I was in capable hands. She took the time to understand my academic interests and extracurricular activities, and together, we crafted a personalized college list that truly reflected my aspirations and potential.”</p>
                  <h2>Ishaan Verma</h2>
                  <p className='subTitle'>MIT</p>
                </div>
                </div>

                <div className='testimonial-section'>
                <div className='testimonial-carousel video-carousel zara'>
                  <img className="video-play-icon" src={play_icon} />
                  <h2>Columbia University</h2>
                  <p className='subTitle'>UC Berkeley</p>
                  <img  src={review_stars}/>
                </div>
              </div>

              <div className='testimonial-section'>
                <div className='testimonial-carousel'>
                  <img  src={review_stars}/>
                  <p>AcceptedX was instrumental in my college application success. My counselor was not only knowledgeable about the intricacies of college admissions but also incredibly supportive. He provided a comprehensive roadmap from day one, outlining every step of the process.  His advice was always spot-on, whether it was about how to ask for recommendation letters or preparing for alumni interviews.”</p>
                  <h2>Ritka Sharma</h2>
                  <p className='subTitle'>Caltech</p>
                </div>
                </div>
              
              </Slider>
          </div>
        </div>
      );
    }

export default TestimonialCarousel;