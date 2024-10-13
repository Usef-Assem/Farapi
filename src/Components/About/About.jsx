import React from 'react'
import style from './About.module.css'
import AboutSlider from './AboutSlider'

function About() {
  return <>
        <div className={`${style.About} d-flex justify-content-center align-items-center py-md-5 flex-wrap`} id='About'>
            <div className='col-12 mt-md-0 mt-5'>
                <p className={`${style.SectionTitle} text-white text-end me-lg-4 me-md-4 me-3`}>About Us</p>
            </div>
        <div className={`${style.AboutContent} text-white ms-md-5 col-md-5 col-11 mt-3 py-md-5`}>
            <p>We are Farapi, a cutting-edge company that gets results</p>
            <p>We are a team of young Egyptian entrepreneurs aiming to become the next tech giant in the MENA region and globally. Established in 2023, our goal is to be a hub for Egypt's top tech talents.</p>
        </div>
        <div className='section2 text-white ms-md-5 col-md-5 col-12 d-flex justify-content-center py-md-5'>
            <div className='w-75 ms-5'>
            <div className= {style.AboutUs}>
                <p>Clicks</p>
                <h2>1000M+</h2>
            </div>
            <div className= {style.AboutUs}>
                <p>CONVERSIONS</p>
                <h2>500K+</h2>
            </div>
            <div className= {style.AboutUs}>
                <p>OUR POSSIBILITIES</p>
                <div className='mb-md-3'>
                <svg width="78" height="38" viewBox="0 0 78 38" fill="none" className='mt-2'>
                <path
                 d="M44.833 10.2497L45.6663 8.99967C47.7652 6.20124 50.6913 4.13412 54.0302 3.09112C57.3691 2.04811 60.9516 2.08211 64.2701 3.18829C67.5887 4.29446 70.475 6.41674 72.5204 9.2545C74.5657 12.0923 75.6663 15.5016 75.6663 18.9997C75.6663 22.4977 74.5657 25.9071 72.5204 28.7448C70.475 31.5826 67.5887 33.7049 64.2701 34.8111C60.9516 35.9172 57.3691 35.9512 54.0302 34.9082C50.6913 33.8652 47.7652 31.7981 45.6663 28.9997L32.333 8.99967C30.2342 6.20124 27.3081 4.13412 23.9691 3.09112C20.6302 2.04811 17.0477 2.08211 13.7292 3.18829C10.4107 4.29446 7.52431 6.41674 5.47897 9.2545C3.43363 12.0923 2.33301 15.5016 2.33301 18.9997C2.33301 22.4977 3.43363 25.9071 5.47897 28.7448C7.52431 31.5826 10.4107 33.7049 13.7292 34.8111C17.0477 35.9172 20.6302 35.9512 23.9691 34.9082C27.3081 33.8652 30.2342 31.7981 32.333 28.9997L33.4463 27.333"
                    stroke="white"
                    strokeWidth="2.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
                </div>
            </div>
            </div>
        </div>
    </div>
        <div className={`${style.About} py-5`}>
            <AboutSlider />
        </div>
  </>
}

export default About