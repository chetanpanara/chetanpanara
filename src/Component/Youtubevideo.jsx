import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeNumber from './YoutubeNumber'
import YoutubeHero from './YoutubeHero'

export default function Youtubevideo() {
  return (
    <>
      
  

      <YoutubeHero></YoutubeHero>

       <section id="video" className="video section">


      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Youtube Videos</h2>
        <p>subscribe & join in youtube channel</p>
        </div>
        

       <div className="youtube-video-card-container">
      <div className="youtube-video-card">
        <div className="youtube-video-card-video">
          <iframe  src="https://www.youtube.com/embed/vZy2W4IIg2c?si=pUlcpRnekS-7ko_e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube-video-card-content">
          <h2 className="youtube-video-card-title">How to send mail from contact form using ReactJS</h2>
          <p className="youtube-video-card-description">How to send mail from contact form using ReactJS</p>
        </div>
      </div>
      <div className="youtube-video-card">
        <div className="youtube-video-card-video">
        <iframe  src="https://www.youtube.com/embed/75OcvRXa330?si=imfKgoBTARzlAwyx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube-video-card-content">
          <h2 className="youtube-video-card-title">How to make Logo using HTML & CSS | Instagram logo design using css</h2>
          <p className="youtube-video-card-description">Video description goes here. Video description goes here.</p>
        </div>
      </div>
      <div className="youtube-video-card">
        <div className="youtube-video-card-video">
        <iframe  src="https://www.youtube.com/embed/5H-JTNGuI1U?si=25QIWuEAQ8NITL_D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube-video-card-content">
          <h2 className="youtube-video-card-title">How to create Registration Form in HTML & CSS || How to make Registration Form Using HTML and CSS</h2>
          <p className="youtube-video-card-description">Video description goes here. Video description goes here.</p>
        </div>
      </div>
    </div>
        
    </section>

      <YoutubeNumber></YoutubeNumber>
    

    
    
    </>
  )
}
