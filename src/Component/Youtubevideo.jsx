import React, { useEffect, useState } from 'react'
import axios from 'axios';
import YoutubeNumber from './YoutubeNumber'
import YoutubeHero from './YoutubeHero'

export default function Youtubevideo() {

  const [videos, setvideos] = useState([]);

  
  useEffect(() => { 
    axios.get('http://localhost:8055/data')
      .then(result => { 
        setvideos(result.data)
      })
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      
  

      <YoutubeHero></YoutubeHero>

       <section id="video" className="video section">


      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Youtube Videos</h2>
        <p>subscribe & join in youtube channel</p>
        </div>
        

        <div className="youtube-video-card-container">
          { 
            videos.map((index) => (
                                         <div className="youtube-video-card">
        <div className="youtube-video-card-video">
                  <iframe src={index.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube-video-card-content">
                  <h2 className="youtube-video-card-title">{index.title}</h2>
                  <p className="youtube-video-card-description">{index.description}</p>
        </div>
          </div>
            ))
          }
      


    </div>
        
    </section>

      <YoutubeNumber></YoutubeNumber>
    

    
    
    </>
  )
}
