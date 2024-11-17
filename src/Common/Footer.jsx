import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    
      
      <footer id="footer" className="footer light-background">

    <div className="container">
      <div className="copyright text-center ">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Kelly</strong> <span>All Rights Reserved<br/></span></p>
      </div>
      <div className="social-links d-flex justify-content-center">
        <Link to=""><i className="bi bi-twitter-x"></i></Link>
        <Link to=""><i className="bi bi-facebook"></i></Link>
        <Link to=""><i className="bi bi-instagram"></i></Link>
            <Link to=""><i className="bi bi-linkedin"></i></Link>
        
      </div>
      <div className="credits">
        Designed by <Link to="#">BootstrapMade</Link>
      </div>
    </div>

  </footer>
    
    
    </>
  )
}
