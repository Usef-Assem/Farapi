import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Azure from '../../Assets/Azure.png'
import ReactImg from '../../Assets/reactjs.png'
import next from '../../Assets/next.png'
import django from '../../Assets/django.png'
import fastApi from '../../Assets/fastapi.png'
import figma from '../../Assets/figma.png'
import wordpress from '../../Assets/wordPress.png'


function AboutSlider() {
    const Images = [
        {img : Azure , alt: "AzureImg"},
        {img : ReactImg , alt: "ReactImg"},
        {img : next , alt: "nextImg"},
        {img : django , alt: "djangoImg"},
        {img : fastApi , alt: "fastApiImg"},
        {img : figma , alt: "figmaImg"},
        {img : wordpress , alt: "wordpressImg"},
    ]
    const settings = {
      dots: false,
      infinite: true,
      speed: 4000, 
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
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
  return <>
        <Slider  {...settings}>
            {Images.map((image , index)=>{
                return <div key={index} className='mt-2 ms-2'>
                    <img src={image.img} alt={image.alt} />
                </div>
            })}
        </Slider>
  
  </>
}

export default AboutSlider