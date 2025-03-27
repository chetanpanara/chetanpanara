import React from 'react'
import HeroSection from './HeroSection'
import Services from './Works'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import YouTubeVideoPage from './YouTubeVideoPage'


export default function Home() {
  return (
    <>

      <HeroSection />
      <About />
      <Services />
      <Projects />
      <YouTubeVideoPage/>
      <Contact />
    </>
  )
}
