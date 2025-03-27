import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./p1.jpg')",
          filter: "brightness(1.2)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />

      {/* Content Container - Centered for both desktop and mobile */}
      <div className="relative mt-32 container mx-auto px-4 py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        {/* Text Content - Centered */}
        <div className="w-full max-w-3xl text-center z-10">
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white mb-2">
            Hello! I'm chetan panara
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Full Stack Developer
            </span>
          </h2>

          <p className="text-lg md:text-2xl lg:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I Plan, Build & Deploy The Robust, Secure & Scalable Web Applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link   to={'/projects'} 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-opacity-50"
            >
              View Projects
            </Link>
            <Link to={'/contact'}
              className="px-8 py-3 rounded-full border-2 border-white text-white font-medium transition-transform hover:scale-105 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white focus:ring-opacity-50"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;