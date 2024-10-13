import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from './Portfolio.module.css';
import sliderImg1 from '../../Assets/project.svg';
import sliderImg2 from '../../Assets/project2.svg';
import sliderImg3 from '../../Assets/project3.svg';

// Custom next arrow button component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${style.customArrow} ${style.nextArrow} mt-md-5`} onClick={onClick}>
      <i className="fa-solid fa-chevron-right fa-lg" style={{color: '#ffffff'}}></i>
    </div>
  );
};

// Custom previous arrow button component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${style.customArrow} ${style.prevArrow} mt-md-5`} onClick={onClick}>
      <i className="fa-solid fa-chevron-left fa-lg" style={{color: '#ffffff'}}></i>
    </div>
  );
};

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`${style.portfolio} py-5 text-white`} id='Portfolio'>
      <p className={`${style.SectionTitle} text-white text-end me-lg-5 me-md-4 me-3`}>Portfolio</p>
      <Slider {...settings}>
        <div className='text-center'>
          <p className={style.projectTitle}>Project name</p>
          <p className={style.projectDescription}>Lorem ipsum dolor sit amet consectetur. Placerat aliquet faucibus mus pharetra quam malesuada quam.</p>
          <div className="d-flex justify-content-center">
            <p className={style.services}>+ 3K users</p>
            <p className={`${style.services} ms-5`}>Custom solutions</p>
          </div>
          <div className="d-flex justify-content-center col-md-7 col-10 mx-auto">
            <div className={style.imageWrapper}>
              <img className={`${style.imageHover} w-100`} src={sliderImg1} alt="Custom Solutions" />
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className={style.projectTitle}>Project name</p>
          <p className={style.projectDescription}>Lorem ipsum dolor sit amet consectetur. Placerat aliquet faucibus mus pharetra quam malesuada quam.</p>
          <div className="d-flex justify-content-center">
            <p>+1K users</p>
            <p className={`${style.services} ms-5`}>CTO Users</p>
            <p className={`${style.services} ms-5`}>Android Apps</p>
          </div>
          <div className="d-flex justify-content-center col-md-7 col-10 mx-auto ">
            <div className={style.imageWrapper}>
              <img className={`${style.imageHover} w-100`} src={sliderImg2} alt="Android Apps" />
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className={style.projectTitle}>Project name</p>
          <p className={style.projectDescription}>Lorem ipsum dolor sit amet consectetur. Placerat aliquet faucibus mus pharetra quam malesuada quam.</p>
          <div className="d-flex justify-content-center">
            <p className={`${style.services} ms-5`}>+ 4K users</p>
            <p className={`${style.services} ms-5`}>UX-Design</p>
            <p className={`${style.services} ms-5`}>Desktop Apps</p>
          </div>
          <div className="d-flex justify-content-center col-md-7 col-10 mx-auto">
            <div className={style.imageWrapper}> 
              <img className={`${style.imageHover} w-100`} src={sliderImg3} alt="Ux-Design" />
            </div>
          </div>
        </div>
      </Slider>
      <div className='d-flex justify-content-center col-12 mt-5'>
        <div className='col-11 col-md-6 col-lg-4'>
          {/* <button className={`${style.buttonColor} w-100 border-0 rounded-5 py-3 mt-3`}>
            View All Projects &gt;
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
