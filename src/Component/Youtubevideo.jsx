import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeNumber from './YoutubeNumber'
import YoutubeHero from './YoutubeHero'

export default function Youtubevideo() {
  return (
    <>
      
  

      <YoutubeHero></YoutubeHero>

       <section id="services" className="services section">


      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Youtube Videos</h2>
        <p>subscribe & join in youtube channel</p>
        </div>
        

    </section>

      <YoutubeNumber></YoutubeNumber>
    

    
    
    </>
  )
}
