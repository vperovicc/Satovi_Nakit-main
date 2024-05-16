import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/casiomain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Casio = () => {

  const Title='CASIO'
  const Headline='Casio satovi su poznati po svojoj izdržljivosti i preciznosti zahvaljujući visokokvalitetnim mehanizmima unutar svakog modela. Njihova tehnologija omogućava tačno vreme i pouzdan rad u svim uslovima.'
  const Text = 'Osim toga, Casio satovi često nude dodatne funkcije poput vodootpornosti, svetlosnih ekrana ili brojnih alarma, što ih čini idealnim izborom za svakodnevnu upotrebu i aktivnosti na otvorenom.'

  const Images=[
    pic1,
    pic2,
    pic3
  ]

  return (
    <div>
      <HeadBar/>
      <NavbarLogo/>
      <Line/>
      <Hero Title={Title} Headline={Headline} Picture={Picture}/>
      <Watches Text={Text} Images={Images}/>
      <Footer/>
    </div>
  )
}

export default Casio
