import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
import Resume from "./Component/Resume";




function App() {
  return (
    <>
      
      <BrowserRouter>
      
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
        </Routes>
      <Footer></Footer>
      
      </BrowserRouter>
      
       
    
    
    </>
  );
}

export default App;
