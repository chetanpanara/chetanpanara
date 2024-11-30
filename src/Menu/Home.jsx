import React from 'react'

import Footer from './Footer'
import Hero from '../Component/Hero'
import Service from '../Component/Service'
import Contact from '../Component/Contact'
import About from '../Component/About'
import YouTubeVideo from '../Component/Youtubevideo'
import Project from '../Component/Project'


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Contact></Contact>
    </>
  )
}
