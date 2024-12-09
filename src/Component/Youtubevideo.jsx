import React, { useEffect, useState } from 'react'
import axios from 'axios';
import YoutubeNumber from './YoutubeNumber'
import YoutubeHero from './YoutubeHero'
import Loadingspinner from './Loadingspinner';

export default function Youtubevideo() {

   const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios.get('https://chetanpanarabackend.onrender.com/data')
      .then(result => {
        setVideos(result.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(err => {
        console.log(err);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <>
      
    

     <YoutubeHero />

      <section id="video" className="video section">
        <div className="container-fluid section-title" data-aos="fade-up">
          <h2>Youtube Videos</h2>
          <p>subscribe & join in youtube channel</p>
        </div>

        {loading ? ( // Show loading placeholders if loading is true
          <div className="youtube-video-card-container">
            {Array.from({ length: 3 }).map((_, index) => (
              <Loadingspinner key={index} />
            ))}
          </div>
        ) : (
          <div className="youtube-video-card-container">
            {videos.map((index) => (
              <div className="youtube-video-card" style={{borderStyle:"none",background:"white"}} key={index.id}>
                <div className="youtube-video-card-video">
                  <iframe
                    src={index.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="youtube-video-card-content">
                  <h2 className="youtube-video-card-title">{index.title}</h2>
                  <p className="youtube-video-card-description">{index.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <YoutubeNumber />

    
    
    </>
  )
}
