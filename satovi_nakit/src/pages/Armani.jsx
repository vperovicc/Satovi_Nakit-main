import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/armanimain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Armani = () => {
  const Title='ARMANI EXCHANGE'
  const Headline='Armani Exchange satovi su poznati po svojoj modernoj estetici, sofisticiranom dizajnu i pouzdanosti. Sa visokokvalitetnim mehanizmima koji su pažljivo integrisani u svaki model, Armani Exchange satovi pružaju preciznost i performanse koji odgovaraju svakodnevnim potrebama modernog čoveka ili žene.'
  const Text = 'Njihova elegantna kombinacija funkcionalnosti i stila čini ih neodoljivim dodatkom za svaku priliku. Bez obzira da li ste u pokretu ili se opuštate, Armani Exchange satovi će vam pružiti tačno vreme i besprekoran izgled koji odražava vašu jedinstvenu osobnost i stil.'

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

export default Armani