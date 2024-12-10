import React from 'react'

export default function Loadingspinner() {
  return (
    <>
    
 <div className="youtube-video-card placeholder-glow" style={{borderStyle:"none"}}>
      <div className="youtube-video-card-video placeholder  loading"></div>
      <div className="youtube-video-card-content">
        <h2 className="youtube-video-card-title placeholder  loading"></h2>
        <p className="youtube-video-card-description placeholder  loading"></p>
      </div>
    </div>
    </>
  )
}
