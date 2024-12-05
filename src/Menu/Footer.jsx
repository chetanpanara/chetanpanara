import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    
      <footer id="footer" className="footer">

    <div className="container">
      <div className="copyright text-center ">
        <p>© 2024<strong className="px-1 sitename">chetanpanara</strong> <span>All Rights Reserved</span></p>
      </div>
     
      <div className="credits">
     
        Designed by <Link to="#">chetanpanara</Link>
      </div>
    </div>

  </footer>
    
    </>
  )
}
