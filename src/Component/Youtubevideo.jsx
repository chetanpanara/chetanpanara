import React from 'react'
import { Link } from 'react-router-dom'

export default function Youtubevideo() {
  return (
    <>
      
    
          <div className="container hero" id="hero">
        <div className="row justify-content-center gy-4">
          <div className="col-lg-7   order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 >Welcome in ckp Infotech world</h1>
            <p >Hey, I'm Developing unique projects and trying to make
web development learning easy for freshy users in this
field. Fast track your development career with me. Hope
you'll love my creativițy.</p>
            <div className="d-flex">
              <Link to="https://www.youtube.com/@ckp_infotech" className="youtubebtn">Subscribe channel</Link>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img">
            <img src="./img/youtubehero.png" className="img-fluid animated" alt="not found"/>
          </div>
        </div>
      </div>
    
 <section id="services" className="services section">


      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Youtube Videos</h2>
        <p>subscribe & join in youtube channel</p>
      </div>

  

         
    <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
              
        <div className="col">
          <div className="card shadow-sm">
           <iframe  src="https://www.youtube.com/embed/5vmyYPvW88k?si=sgsfTfvB4nk2jHai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body">
              <p className="card-text">How to create Registration Form in HTML & CSS || How to make Registration Form Using HTML and CSS</p>
              <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                           <small className="text-body-secondary ">Like</small>
                         <small className="text-body-secondary mx-2">Comment</small>          
                  </div>
              </div>
            </div>
          </div>
              </div>
              
                 <div className="col">
          <div className="card shadow-sm">
          <iframe  src="https://www.youtube.com/embed/5H-JTNGuI1U?si=z4b2FYm2DoWy9iWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body">
              <p className="card-text">How to create Registration Form in HTML & CSS || How to make Registration Form Using HTML and CSS</p>
              <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                           <small className="text-body-secondary ">Like</small>
                         <small className="text-body-secondary mx-2">Comment</small>          
                  </div>
              </div>
            </div>
          </div>
              </div>
              
                 <div className="col">
          <div className="card shadow-sm">
         <iframe  src="https://www.youtube.com/embed/75OcvRXa330?si=7oZvMhQY3NFox2yZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-body">
              <p className="card-text">How to make Logo using HTML & CSS | Instagram logo design using css</p>
              <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                           <small className="text-body-secondary ">Like</small>
                         <small className="text-body-secondary mx-2">Comment</small>          
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  

     

    </section>
    
    
    </>
  )
}
