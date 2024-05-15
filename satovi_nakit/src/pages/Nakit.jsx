import React from 'react'
import NakitComp from '../components/NakitComp'
import Info from '../components/Info'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Footer from '../components/Footer'

const Nakit = () => {
  return (
    <div>
        <HeadBar/>
        <NavbarLogo/>
        <NakitComp/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default Nakit