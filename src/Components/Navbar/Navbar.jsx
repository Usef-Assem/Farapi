import React from 'react'
import style from './Navbar.module.css'
import logo from '../../Assets/Logo.svg'
function Navbar() {
  return<>
  <nav className={`${style.bgColor} navbar navbar-expand-lg`}>
  <div className="container">
    <a className="navbar-brand text-white fs-2" href="#">
        <img src={logo} alt="Nav logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars fa-xl" style={{color: '#ffffff'}}></i>
      {/* <span className="navbar-toggler-icon"></span> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`${style.navStyle} navbar-nav ms-auto mb-2 mb-lg-0`}>
        <li className= 'nav-item'>
          <a className="nav-link text-white ms-md-0 ms-4" aria-current="page" href="#Services">Services</a>
        </li>
        <li className="nav-item ms-4">
          <a className="nav-link text-white" href="#Portfolio">Portfolio</a>
        </li>
        <li className="nav-item ms-4">
          <a className="nav-link text-white" href="#About">About Us</a>
        </li>
        <li className="nav-item ms-4">
          <a className="nav-link text-white" href="#contact">Contact US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}

export default Navbar