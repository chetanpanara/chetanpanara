import React from 'react'
import { Link } from 'react-router-dom'

export default function YoutubeHero() {
  return (
    
    <>
    
      <section>
                  <div className="container" id="hero">
        <div className="row justify-content-center gy-4">
          <div className="col-lg-6   order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 className='heroh1'>Welcome in ckp Infotech</h1>
            <p className='herop'>Hey, I'm Developing unique projects and trying to make
web development learning easy for freshy users in this
field. Fast track your development career with me. Hope
you'll love my creativițy.</p>
            <div className="d-flex">
            <Link to="https://www.youtube.com/@ckp_infotech" className="youtubebtn">Subscribe channel</Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="./img/youtubehero.png" className="img-fluid animated" alt="not found"/>
          </div>
        </div>
      </div>
      </section>
    
    </>
  )
}
