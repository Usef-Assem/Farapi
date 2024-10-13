import React from 'react';
import style from './ContactUs.module.css';

function ContactUs() {
  return (
    <>
      <div className={`${style.contact} py-3`} id='contact'>
        <p className={`${style.SectionTitle} text-white text-end me-lg-5 me-md-4 me-3`}>Contact Us</p>
        <div className={`${style.layer}`}></div>

        <div className={`${style.textContent} py-4`}>
          <h3 className='mt-5'>Get in Touch</h3>
          <p>Contact us today and let's start a conversation about how <br /> we can bring your ideas to life.</p>
        </div>

        <div className={`${style.formContent} d-flex justify-content-center`}>
          <form className='col-md-10 col-lg-7 col-12 d-flex justify-content-center flex-wrap py-5'>

            <label htmlFor="name" className="visually-hidden">Name</label>
            <input id="name" className='rounded-5 w-75 border-0 py-3 px-4' type="text" placeholder='Name' />

            <label htmlFor="email" className="visually-hidden">Email</label>
            <input id="email" className='rounded-5 w-75 border-0 py-3 px-4 mt-4' type="email" placeholder='email@janesfakeddomain.net' />

            <label htmlFor="message" className="visually-hidden">Message</label>
            <textarea id="message" rows={5} className='rounded-5 w-75 border-0 py-3 px-4 mt-4' style={{ resize: 'none' }} placeholder='Please enter your message here'></textarea>

            <button className={`${style.buttonColor} w-75 border-0 rounded-5 py-2 mt-3`}>Contact Us</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
