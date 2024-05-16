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
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='starter' className='brands'>
       <Link to='/casio'><BrandBox imageUrl={Casio}/></Link> 
       <Link to='/tissot'><BrandBox imageUrl={Tissot}/></Link> 
       <Link to='/armani'><BrandBox imageUrl={Armani}/></Link> 
       <Link to='/gshock'><BrandBox imageUrl={Gshock}/></Link> 
       <Link to='/kors'><BrandBox imageUrl={MicKors}/></Link> 
       <Link to='/boss'><BrandBox imageUrl={Boss}/></Link> 
       <Link to='/edifice'><BrandBox imageUrl={Edifice}/></Link> 
       <Link to='/fossil'><BrandBox imageUrl={Fossil}/></Link> 
    </div>
  )
}

export default Hero