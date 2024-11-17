import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    
       <header id="header" className="header d-flex align-items-center light-background sticky-top">
    <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

      <Link to="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        <h1 className="sitename">Kelly</h1>
          </Link>
          
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="services.html">Services</Link></li>
          <li><Link to="portfolio.html">Portfolio</Link></li>
          <li className="dropdown"><Link to=" "><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link to=" ">Dropdown 1</Link></li>
              <li className="dropdown"><Link to=" "><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to=" ">Deep Dropdown 1</Link></li>
                  <li><Link to=" ">Deep Dropdown 2</Link></li>
                  <li><Link to=" ">Deep Dropdown 3</Link></li>
                  <li><Link to=" ">Deep Dropdown 4</Link></li>
                  <li><Link to=" ">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link to=" ">Dropdown 2</Link></li>
              <li><Link to=" ">Dropdown 3</Link></li>
              <li><Link to=" ">Dropdown 4</Link></li>
            </ul>
          </li>
          <li><Link to="contact.html">Contact</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div className="header-social-links">
       
      </div>

    </div>
  </header>
    
    
    </>
  )
}
