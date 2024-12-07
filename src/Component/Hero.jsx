import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    
    
      
             <div className="container mb-5" id="hero">
        <div className="row justify-content-center gy-4">
          <div className="col-lg-6   order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 className='heroh1'>Hello!! I'm Chetan Panara</h1>
            <p className='herop'>I'am Full stack developer to create robust,secure and scalable web applications using MERN stack.</p>
            <div className="d-flex">
              <Link to="/about" className="download">Get Started</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="./img/cp2.jpg" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
    
        
     

    
    </>
  )
}
