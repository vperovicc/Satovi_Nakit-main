import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/edificemain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Edifice = () => {
  const Title='EDIFICE'
  const Headline='Edifice satovi su sinonim za vrhunski dizajn, tehnološku inovaciju i sportsku eleganciju. Sa svojim dinamičnim izgledom i naprednim funkcijama, ovi satovi su namenjeni onima koji cene stil i performanse. Od trkačkih staza do poslovnih sastanaka, Edifice satovi pružaju tačno vreme i funkcije poput hronografa, alarmnih funkcija i Bluetooth povezivanja.'
  const Text = 'Njihova sofisticirana estetika i visokokvalitetni materijali garantuju dugotrajnost i pouzdanost. Edifice satovi su više od običnog dodatka - oni su izjava o stilu i tehnološkom napretku, istovremeno spajajući sportsku eleganciju sa funkcionalnošću za savremene ljude u pokretu.'

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

export default Edifice