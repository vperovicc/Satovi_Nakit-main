import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/fossilmain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Fossil = () => {
  
  const Title='FOSSIL'
  const Headline='Fossil satovi su spoj klasičnog stila, modernog dizajna i tehnološke inovacije. Njihova raznolikost modela omogućava svakome da pronađe sat koji odražava njegov ili njen lični stil. Od klasičnih modela sa kožnim remenom do sportskih satova sa čeličnom narukvicom, Fossil satovi nude ne samo tačno vreme, već i izražajnu estetiku.'
  const Text = 'Sa naprednim funkcijama poput hronografa i datuma, ovi satovi su praktični i funkcionalni za svakodnevnu upotrebu. Kvalitetni materijali i pažljiva izrada obezbeđuju dugotrajnost i pouzdanost. Nositi Fossil sat znači nositi komad mode koji ističe vašu jedinstvenost i stil, čineći ga neizostavnim dodatkom za svaku priliku.'

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

export default Fossil