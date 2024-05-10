import React from 'react'
import HeadBar from '../src/components/HeadBar'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NavbarLogo from './components/NavbarLogo'
import Part1 from './components/Part1'
import Part2 from './components/Part2'
import Pandora from './components/Pandora'
import Guess from './components/Guess'

const App = () => {
  return (
    <div>
      <HeadBar/>
      <NavbarLogo/>
      <Navbar/>
      <Hero/>
      <Part1/>
      <Part2/>
      <Pandora/>
      <Guess/>
    </div>
  )
}

export default App