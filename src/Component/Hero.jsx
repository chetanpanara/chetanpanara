import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    
    
      <section id="hero" class="hero section mt-5">
        
      {/* <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Hello!! I'm Chetan Panara</h1>
            <p>I'am Full stack developer to create robust,secure and scalable web applications using MERN stack.</p>
            <div class="d-flex">
              <Link to="/about" class="btn-get-started">Get Started</Link>

            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="./img/hero-img.png" class="img-fluid animated" alt=""/>
          </div>
        </div>
      </div> */}
        
         <div class="container-fluid">
        <div class="row gy-4 justify-content-center">
          <div class="col-lg-5 offset-lg-1 col-md-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Hi!!, I'm Chetan Panara</h1>
            <p>I'am Full stack developer to create robust,secure and scalable web applications using MERN stack.</p>
            <div class="d-flex">
              <Link to="/about" class="btn-get-started">Get Started</Link>

            </div>
          </div>
          <div class="col-lg-6 col-md-5 order-1 order-lg-2 hero-img">
            <img src="./img/hero-img.png" class="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>

    </section>
      
    </>
  )
}
