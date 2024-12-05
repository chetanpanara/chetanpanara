import React from 'react'
import { Link } from 'react-router-dom'
export default function Service() {
  return (
    <>
      
      
    <section id="services" className="services section">


      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Here's how I Can Help You</h2>
        <p>Building digital experience. Let's Collaborate</p>
      </div>

      <div className="container-fluid">

        <div className="row gy-4">

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="bi bi-file-earmark-lock2-fill"></i>
              <h4><Link to="#" className="stretched-link">Secure,scalable,robus website</Link></h4>
              <p>I create secure, scalable, and robust websites, ensuring reliability and performance for all users.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
        <i className="bi bi-gem"></i>
              <h4><Link to="#" className="stretched-link">Create Responsive website</Link></h4>
              <p>I create responsive websites that adapt perfectly across all devices, ensuring a seamless user experience everywhere.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
                    <i className="bi bi-github"></i>
              <h4><Link to="#" className="stretched-link">Free Source code Available</Link></h4>
              <p>Free source code is available on GitHub, allowing easy access and collaboration for developers.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
                 <i className="bi bi-broadcast-pin"></i>
              <h4><Link to="#" className="stretched-link">Live Projects</Link></h4>
              <p>I create live projects that solve real-world problems, offering hands-on experience in development, testing, deployment, and solution implementation.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    
    </>
  )
}
