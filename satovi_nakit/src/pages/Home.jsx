import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Part1 from '../components/Part1'
import Part2 from '../components/Part2'
import Pandora from '../components/Pandora'
import Guess from '../components/Guess'
import Rosefield from '../components/Rosefield'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Home = () => {
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
        <Rosefield/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default Home