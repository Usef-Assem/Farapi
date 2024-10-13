import React from 'react'
import logo from '../../Assets/Logo.svg'
import style from './Footer.module.css'
function Footer() {
  return <>
    <footer className={`${style.bgColor}`}>
        <div className={`${style.footerContent} d-flex flex-wrap justify-content-between mx-auto py-5`}>

            <div className='col-md-3 col-lg-3 col-12 ms-md-0 ms-4'>
                <img src={logo} alt="farapi" className='ms-md-5 py-md-3'/>
            </div>

            <div className='col-md-3 col-5'>
                <ul className='ms-md-5 py-md-2'>
                    <li>
                        <a href="services">Services</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Portfolio</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>

            <div className='col-md-3 col-6'>
                <ul className='ms-md-3 py-md-2'>
                    <li>
                        <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Cookie Policy</a>
                    </li>
                </ul>
            </div>

            <div className={`text-white col-md-3 col-12 mt-md-0 mt-3 ms-md-0 ms-4`}>
                <div className="content py-md-4">
                <p className={`${style.Email} ms-md-3`}>Email:</p>
                <p className={`${style.ContactMail} ms-md-3`}>Contact@farapi.ai</p>
                <div className="icons d-flex ms-md-3">
                <div className={`${style.smallCircle} text-center`}>
                <svg width="14" height="16" viewBox="0 0 18 18" fill="none"><path d="M0.311992 0.541016L7.44139 10.0729L0.267578 17.823H1.88258L8.16387 11.038L13.2385 17.823H18.7334L11.2032 7.75492L17.881 0.541016H16.266L10.4818 6.78983L5.80798 0.541016H0.313063H0.311992ZM2.68629 1.73036H5.21007L16.3569 16.6336H13.8332L2.68629 1.73036Z" fill="#F9F9F9"></path></svg>
                </div>
                <div className={`${style.smallCircle} text-center ms-2`}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M11.0149 5.95206C10.3369 5.95206 9.83494 6.12306 9.44194 6.33906C9.37894 6.11506 9.17194 5.95106 8.92794 6.00006H5.94394C5.64894 5.95106 5.40994 6.19006 5.50094 6.50006V17.5001C5.40994 17.7801 5.64894 18.0201 5.94394 18.0001H8.92794C9.22294 18.0201 9.46194 17.7801 9.46194 17.4851L9.46094 10.8371C9.45994 10.8341 9.44894 10.5161 9.64994 10.2971C9.81094 10.1231 10.0879 10.0341 10.4709 10.0341C11.1089 10.0341 11.3929 10.2951 11.4989 10.8791V17.4851C11.3939 17.7801 11.6329 18.0201 11.9279 18.0001H15.0729C15.3679 18.0201 15.6069 17.7801 15.5009 17.4851V10.6571C15.6059 7.18506 13.1329 5.95206 11.0149 5.95206ZM14.5379 17.0001H12.4619V10.8791C12.4619 9.69806 11.6989 8.96606 10.4719 8.96606C9.77794 8.96606 9.23794 9.17006 8.86594 9.57206C8.34894 10.1321 8.38894 10.8421 8.49994 11.0001V17.0001H6.47794V7.02006H8.39394V7.35606C8.39316 7.45616 8.42063 7.55444 8.4732 7.63962C8.52577 7.7248 8.6013 7.79342 8.69112 7.8376C8.78094 7.88178 8.8814 7.89972 8.98096 7.88937C9.08052 7.87901 9.17514 7.84078 9.25394 7.77906L9.39394 7.67106C9.79894 7.35206 10.2179 7.02106 11.0159 7.02106C11.8419 7.02106 14.5389 7.28407 14.5389 10.6581L14.5379 17.0001ZM2.49994 0.966064C1.37794 0.966064 0.465942 1.87806 0.465942 3.00006C0.465942 4.12206 1.37794 5.03406 2.49994 5.03406C3.62194 5.03406 4.53394 4.12206 4.53394 3.00006C4.53394 1.87806 3.62194 0.966064 2.49994 0.966064ZM2.49994 3.96606C1.96794 3.96606 1.53394 3.53206 1.53394 3.00006C1.53394 2.46806 1.96794 2.03406 2.49994 2.03406C3.03194 2.03406 3.46594 2.46806 3.46594 3.00006C3.46594 3.53206 3.03194 3.96606 2.49994 3.96606ZM3.92794 5.95106H0.959943C0.664943 5.95106 0.425943 6.19006 0.499943 6.50006V17.5001C0.425943 17.7801 0.664943 18.0201 0.959943 18.0001H3.92794C4.22294 18.0201 4.46194 17.7801 4.46194 17.4851V6.48506C4.46194 6.34344 4.40568 6.20761 4.30554 6.10747C4.20539 6.00732 4.06957 5.95106 3.92794 5.95106ZM3.49994 17.0001H1.49394V7.02006H3.49994V17.0001Z" fill="white"></path></svg>
                </div>
                <div className={`${style.smallCircle} text-center ms-2`}>
                <svg width="16" height="16" viewBox="0 0 14 20" fill="none"><path d="M10.4294 3.42323C9.4226 3.42323 8.59272 4.18405 8.48361 5.16184L8.47037 5.17508V5.38225V8.7498V9.2498H8.97037H12.5583L12.044 12.7861H8.97037H8.47037V13.2861V23.2959C7.92791 23.3553 7.3763 23.386 6.81811 23.386C6.148 23.386 5.48815 23.3422 4.84199 23.2569V13.2861V12.7861H4.34199H1V9.2498H4.34199H4.84199V8.7498V4.62946C4.84199 2.39444 6.61777 0.573477 8.83633 0.502168H8.97145C8.99023 0.502168 9.00669 0.501183 9.01995 0.5H12.6373V3.42323H10.4294ZM9.05838 0.495259C9.05967 0.49506 9.05806 0.495312 9.05604 0.495603L9.05838 0.495259Z" stroke="#F9F9F9"></path></svg>
                </div>
                </div>
                </div>
            </div>

        </div>
    </footer>
    <div className={`${style.copyRights} py-1`}>
        <p className='text-center py-2 mt-4'>Copyright © 2024 Farapi all rights reserved.</p>
    </div>
  </>
}

export default Footer