import React from 'react'

import Footer from './Footer'
import Hero from '../Component/Hero'
import Service from '../Component/Service'
import Contact from '../Component/Contact'
import About from '../Component/About'
import Project from '../Component/Project'



export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Service></Service>
      <Contact></Contact>
    </>
  )
}
