import React from 'react'
import Hero from '../Component/Hero'
import Service from '../Component/Service'
import Contact from '../Component/Contact'
import About from '../Component/About'
import Project from '../Component/Project'
import YoutubeNumber from '../Component/YoutubeNumber'


export default function Home() {
  return (
    <>
      <Hero></Hero>
     
      <About></About>
      <Project></Project>
      <YoutubeNumber></YoutubeNumber>
      <Service></Service>
      <Contact></Contact>
    </>
  )
}
