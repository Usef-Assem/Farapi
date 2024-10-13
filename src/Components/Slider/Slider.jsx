import React, { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import apple from '../../Assets/apple.svg';
import Desktop from '../../Assets/desktop.svg';
import Android from '../../Assets/android.svg';
import customSolution from '../../Assets/solutions.svg';
import Cloud from '../../Assets/cloud.svg';
import ux from '../../Assets/ux.svg';
import CTO from '../../Assets/cto.svg';
import Software from '../../Assets/software.svg';

const Slider = () => {
  const swiperRef = useRef(null);
  const CARDS = [
    {
      img: apple ,
      title: 'IOS Apps',
      text: 'High-quality iOS apps deliver seamless user experiences.',
    },
    {
      img: Desktop,
      title: 'Desktop Apps',
      text: 'Robust desktop applications enhance productivity and efficiency.',
    },
    {
      img: Android,
      title: 'Android Apps',
      text: 'Custom Android apps are developed to meet specific needs and business goals.',
    },
    {
      img: customSolution,
      title: 'Custom solutions',
      text: 'Custom solutions address unique business challenges and objectives.',
    },
    {
      img: Cloud,
      title: 'Cloud support',
      text: 'Comprehensive cloud support ensures systems run efficiently.',
    },
    {
      img: ux,
      title: 'UX-Design',
      text: 'UX-Design services focus on creating intuitive and engaging user experiences.',
    },
    {
      img: CTO,
      title: 'CTO as a service',
      text: 'CTO as a Service provides strategic technical leadership for business.',
    },
    {
      img: Software,
      title: 'Software execution',
      text: 'Complete software execution ensures projects meet all requirements.',
    },
  ];

  return (
    <Container
    sx={{
      paddingTop: '25px',
      paddingBottom: '40px',
      backgroundColor: '#002733',
      color: 'white',
      
    }}
  >
      <Box className="Center">
        <Typography variant="h4" sx={{
      textAlign: 'center',
      fontFamily: 'AdventSemiBold, sans-serif',
      fontSize: '33px',
      paddingTop: '8px'
    }}>Your software partner</Typography>
        <Typography variant="body1" sx={{ 
            textAlign: 'center',
            fontFamily: 'MontserratLight , sans-serif' ,
            fontSize: '14px',
            marginTop: '15px'
           }}
        >
          Our custom solutions are designed <br /> to fit your exact needs.
        </Typography>
      </Box>
      <Swiper
        ref={swiperRef}
        modules={[Grid]}
        grid={{ rows: 2 }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.update();
          }, 1000);
        }}
        spaceBetween={20}
        loop = {false}
        className="services-swiper mt-4"
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' },
          },
          400: {
            slidesPerView: 1.4,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' },
          },
          639: {
            slidesPerView: 2.75,
            spaceBetween: 0,
            grid: { rows: 2, fill: 'row' },
          },
          865: {
            slidesPerView: 3.5,
            spaceBetween: 20,
            grid: { rows: 2, fill: 'row' },
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            grid: { rows: 2, fill: 'row' },
          },
        }}
      >
        {CARDS.map((card, index) => (
          <SwiperSlide key={index}>
<Box
  sx={{
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '0.1rem solid #707070',
    height: 280,
    color: 'white',
    transition: 'border 0.3s ease',
    '&:hover': {
      borderColor: '#fff',
    },
    '& img': {
      transition: 'transform 0.3s ease', 
    },
    '&:hover img': {
      transform: 'translate(7px, 7px) scale(1.2)', 
    },
  }}
>
  <img
    src={card.img}
    alt="cardImg"
    width="52"
    height="52"
  />
  <Typography
    variant="body2"
    sx={{
      marginTop: 3,
      position: 'relative',
      fontFamily: 'MontserratRegular, sans-serif',
      fontSize: '20px'
    }}
  >
    {card.title}
  </Typography>
  <Typography
    variant="body1"
    sx={{
      marginTop: 2,
      textAlign: 'left',
      fontSize: { md: 18, xs: 16 },
      fontFamily: 'MontserratLight, sans-serif'
    }}
  >
    {card.text}
  </Typography>
</Box>




          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider ;