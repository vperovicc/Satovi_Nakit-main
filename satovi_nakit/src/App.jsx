import React from 'react'
import HeadBar from '../src/components/HeadBar'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NavbarLogo from './components/NavbarLogo'

const App = () => {
  return (
    <div>
      <HeadBar/>
      <NavbarLogo/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App