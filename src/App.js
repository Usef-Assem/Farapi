import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import './App.css'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Testmonials from './Components/Testmonials/Testmonials'
import ContactUs from './Components/Contact/ContactUs'
import Footer from './Components/Footer/Footer'
import Slider from './Components/Slider/Slider'


function App() {
  return <>
  <Navbar />
  <Home />
  <Services />
  <Portfolio />
  <About />
  <Testmonials />
  <ContactUs />
  <Footer />
  </>
}

export default App