import React from 'react'
import BrandBox from './BrandBox'
import '../styles/Hero.css'
import Casio from '../assets/casio.png'
import Tissot from '../assets/tissot.png'
import Armani from '../assets/armani.png'
import Gshock from '../assets/gshock.png'
import MicKors from '../assets/michealkors.png'
import Boss from '../assets/boss.png'
import Edifice from '../assets/edifice.png'
import Fossil from '../assets/fossil.png'

const Hero = () => {
  return (
    <div className='brands'>
        <BrandBox imageUrl={Casio}/>
        <BrandBox imageUrl={Tissot}/>
        <BrandBox imageUrl={Armani} />
        <BrandBox imageUrl={Gshock} />
        <BrandBox imageUrl={MicKors} />
        <BrandBox imageUrl={Boss} />
        <BrandBox imageUrl={Edifice} />
        <BrandBox imageUrl={Fossil} />
    </div>
  )
}

export default Hero