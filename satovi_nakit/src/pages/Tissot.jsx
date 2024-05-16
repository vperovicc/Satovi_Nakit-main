import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/tissotmain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Tissot = () => {
  const Title='TISSOT'
  const Headline='Tissot satovi su sinonim za eleganciju, performanse i vrhunsku izdržljivost. Zahvaljujući pažljivo izrađenim mehanizmima i inovativnoj tehnologiji, Tissot satovi pružaju tačno vreme i pouzdan rad u svim okolnostima.'
  const Text = 'Njihov besprekoran dizajn i precizna izrada čine ih idealnim izborom kako za svakodnevnu upotrebu, tako i za posebne prilike. Tissot satovi su simbol luksuza i kvaliteta, istinski partneri za svakog ljubitelja vrhunskih satova.'

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

export default Tissot