import React from 'react'
import HeadBar from '../components/HeadBar'
import NavbarLogo from '../components/NavbarLogo'
import Line from '../components/Line'
import Footer from '../components/Footer'
import Hero from '../components/complex/Hero'
import Watches from '../components/complex/Watches'
import Picture from '../assets/gshockmain.png'
import pic1 from '../assets/casio1.png'
import pic2 from '../assets/casio2.png'
import pic3 from '../assets/casio3.png'

const GShock = () => {
  const Title='G-SHOCK'
  const Headline='G-Shock satovi su legendarni po svojoj izuzetnoj izdržljivosti, tehnološkoj inovaciji i neustrašivom stilu. Sa svojim revolucionarnim mehanizmima otpornim na udarce i vodootpornom konstrukcijom, G-Shock satovi su stvoreni za ekstremne uslove i avanture. '
  const Text = 'Njihova napredna tehnologija omogućava precizno merenje vremena čak i u najzahtevnijim situacijama, dok njihov robusni dizajn pruža maksimalnu zaštitu od spoljašnjih uticaja. Bez obzira da li ste na planinarenju, surfanju ili samo u gradu, G-Shock satovi su pouzdan partner koji će vam omogućiti da budete u toku sa vremenom i bezbrižno uživate u svakom trenutku.'

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

export default GShock