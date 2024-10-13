import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './Testmonials.module.css';

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'red' }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'green' }}
      onClick={onClick}
    />
  );
}

function Testmonials() {
  const sliderRef = useRef(null); // Reference to the Slider component

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false, // No arrows on smaller breakpoints
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handlers for custom buttons
  const nextSlide = () => {
    sliderRef.current.slickNext(); // Move to next slide
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev(); // Move to previous slide
  };

  return (
    <>
      <div className={`${style.testmonials} py-5`}>
      <p className={`${style.SectionTitle} text-white text-end me-lg-5 me-md-4 me-3`}>Testmonials</p>
        <div className="content text-white text-center mt-4 py-5">
          <p className={style.title}>What Our Clients Say</p>
          <p className={style.description}>
            Our clients' testimonials highlight our dedication to delivering
            exceptional results and building lasting relationships.
          </p>
        </div>
        <div className="slider py-2 d-flex justify-content-center">
          <div className="slider-container w-75">
            {/* Reference the slider here */}
            <Slider ref={sliderRef} {...settings}>
              <div key={1} className={`${style.TestmonialCards} p-3 ms-md-4 ms-4`}>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quae, recusandae perspiciatis possimus quam
                </p>
                <p className="text-white">Alex Thompson</p>
              </div>
              <div key={2} className={`${style.TestmonialCards} p-3 ms-md-4 ms-4`}>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quae, recusandae perspiciatis possimus quam
                </p>
                <p className="text-white">Alex Thompson</p>
              </div>
              <div key={3} className={`${style.TestmonialCards} p-3 ms-md-4 ms-4`}>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quae, recusandae perspiciatis possimus quam
                </p>
                <p className="text-white">Alex Thompson</p>
              </div>
            </Slider>

            {/* Custom Buttons */}
            <div className="text-center mt-5">
              <button className="button bg-transparent me-5 border-0" onClick={prevSlide}>
              <svg width="33" height="20" viewBox="0 0 33 20" fill="none"><path d="M11.1667 0.666016C11.1667 1.65535 10.1893 3.13268 9.2 4.37268C7.928 5.97268 6.408 7.36868 4.66533 8.43402C3.35867 9.23268 1.77467 9.99935 0.499999 9.99935M0.499999 9.99935C1.77467 9.99935 3.36 10.766 4.66533 11.5647C6.408 12.6313 7.928 14.0273 9.2 15.6247C10.1893 16.866 11.1667 18.346 11.1667 19.3327M0.499999 9.99935L32.5 9.99935" stroke="white"></path></svg>
              </button>
              <button className="button bg-transparent ms-5 border-0" onClick={nextSlide}>
              <svg width="33" height="20" viewBox="0 0 33 20" fill="none"><path d="M21.8333 0.666016C21.8333 1.65535 22.8107 3.13268 23.8 4.37268C25.072 5.97268 26.592 7.36868 28.3347 8.43402C29.6413 9.23268 31.2253 9.99935 32.5 9.99935M32.5 9.99935C31.2253 9.99935 29.64 10.766 28.3347 11.5647C26.592 12.6313 25.072 14.0273 23.8 15.6247C22.8107 16.866 21.8333 18.346 21.8333 19.3327M32.5 9.99935L0.5 9.99935" stroke="white"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonials;
