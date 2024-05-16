import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/bossmain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Boss = () => {
  const Title='BOSS'
  const Headline='Hugo Boss satovi predstavljaju spoj elegancije, luksuza i vrhunskog kvaliteta. Sa prepoznatljivim dizajnom koji odražava suptilnu sofisticiranost, ovi satovi su neizostavan dodatak za svaku priliku. Bez obzira da li se radi o klasičnom modelu sa kožnim kaišem ili sportskom satu sa čeličnom narukvicom, svaki Hugo Boss sat odiše bezvremenom elegancijom.'
  const Text = 'Napredne funkcije poput hronografa i datuma dodaju praktičnost, dok pažljivo izabrani materijali i precizna izrada garantuju pouzdanost i trajnost. Noseći Hugo Boss sat, nosite ne samo komad mode, već i izjavu o svom sofisticiranom stilu i ukusu.'

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

export default Boss