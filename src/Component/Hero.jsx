import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    
    
      <div class="container hero section" id="hero">
        <div class="row gy-4">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Hello!! I'm Chetan Panara</h1>
            <p>I'am Full stack developer to create robust,secure and scalable web applications using MERN stack.</p>
            <div class="d-flex">
              <Link to="/about" class="btn-get-started">Get Started</Link>

            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="./img/cp2.jpg" class="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
        
     

    
    </>
  )
}
