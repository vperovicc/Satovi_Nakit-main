import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/korsmain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const Kors = () => {
  const Title='MICHEAL KORS'
  const Headline='Michael Kors satovi nisu samo komad koji pokazuje tačno vreme - oni su simbol stila i elegancije. Njihov besprekoran dizajn, koji kombinuje klasične elemente sa modernim detaljima, čini ih neodoljivim dodatkom svakom outfitu. Bilo da birate klasični model sa čeličnim kaišem ili elegantan sat sa kožnim remenom, svaki Michael Kors sat predstavlja izjavu o vašem ličnom stilu.'
  const Text = 'Sa bogatim izborom boja i tekstura, ovi satovi se lako prilagođavaju svakoj prilici i raspoloženju. Uz napredne funkcije kao što su hronograf i vodootpornost, Michael Kors satovi su ne samo estetski privlačni, već i izuzetno praktični. Nositi Michael Kors sat znači nositi komad mode koji ističe vašu jedinstvenost i sofisticiranost, bez obzira na to gde se nalazite ili šta radite.'

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

export default Kors