import React from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import SatoviComp from '../components/SatoviComp'

const Satovi = () => {
  return (
    <div>
        <HeadBar/>
        <NavbarLogo/>
        <SatoviComp/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default Satovi