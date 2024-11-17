import React from 'react'
import { Link } from 'react-router-dom'

export default function Herosection() {
  return (
    <>
  
    <section id="hero"  className="hero section">

      <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

      <div  className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div  className="row justify-content-center">
          <div  className="col-lg-8">
            <h2>Hello!! I'm Chetan Panara</h2>
            <p>Full Stack Developer</p>
              <Link to="about.html" className="btn-get-started">About Me</Link>
              
          </div>
        </div>
      </div>

    </section>
    
    </>
  )
}
