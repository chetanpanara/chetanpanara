import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Home from './Menu/Home';
import './index';
import { Navbar } from './Navbar';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Footer from './Menu/Footer';
import About from './Component/About';
import Youtubevideo from './Component/Youtubevideo';
import Project from './Component/Project';
import { useState } from 'react';
import Template from './Component/Template';






function App() {


  return (


  
    <>
      
 <BrowserRouter>
        <Navbar></Navbar>

      
        
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/works" element={<Service></Service>} />
          <Route path="/video" element={<Youtubevideo></Youtubevideo>} />
          <Route path="/project" element={<Project></Project>} />
           <Route path="/templates" element={<Template></Template>} />
            <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>        

    </>
  
  );
}

export default App;
