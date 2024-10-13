  import React from 'react'
  import style from './Home.module.css'

  function Home() {
    return (
      <>
        <div className={`${style.Home} min-vh-100 d-flex justify-content-center align-items-center position-relative`}>
          <div className="Home w-75 d-flex col-12 flex-wrap">
            <div className={`${style.HomeContent} col-lg-7 col-md-6 col-12`}>
              <p className='m-0'>Innovation in every</p>
              <p className='m-0'>line of custom code</p>  
              <p>Experience the difference with <br /> our custom software solutions.</p>
            </div>
            <div className="Home-button py-5 mt-auto col-12 col-lg-5 col-md-6">
              <a className={`text-decoration-none text-black py-3 rounded-5 ms-lg-5 ms-md-3 ${style.bgColor}`} href="#">Contact Us</a>
            </div>
          </div>
          <div>
          <div className='position-absolute ms-5 d-none d-md-block' style={{ bottom: '8rem'}}>
           <svg width="28" height="114" viewBox="0 0 28 114" fill="none" style={style}>
                <path
                  d="M1 99.5633L14 113M14 113L27 99.5633M14 113V1"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
            </svg>
          </div>
          </div>
        </div>
      </>
    )
  }

  export default Home
