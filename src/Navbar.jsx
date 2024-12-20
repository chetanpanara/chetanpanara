import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
 

  return (
    <section>
          <div className="container">
             <nav className="fixed-top">
      <Link to="/" className="title">
          <div className="image-text-container">
            <img src="./img/ckp.png" alt="" height="60px" width="60px" />
          <span>chetanpanara</span>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className="mx-auto">
             <ul className={menuOpen ? "open" : ""}>
        
          <>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
              </li>
                 <li>
              <Link to="/project">Project</Link>
              </li>
             
            <li>
              <Link to="/works">Works</Link>
              </li>
               <li>
              <Link to="/Youtube">Youtube</Link>
              </li>
              
            <li>
              <Link to="/contact">Contact</Link>
            </li>
           
          </>
      </ul>
      </div>
    </nav>
          </div>
          </section>
  );
};
