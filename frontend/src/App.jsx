import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Works';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import YouTubeVideoPage from './pages/YouTubeVideoPage';

function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Navbar Component */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/youtube" element={<YouTubeVideoPage/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;