import React from 'react'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import FAQ from './FAQ'
import Demo from './Demo'

const LandingPage = () => {
  return (
      <div>
          <Hero />
          <About/>
          <Features />
          <FAQ />
          <Demo />
      </div>
  )
}

export default LandingPage