import React from 'react'
import BrandBox from './BrandBox'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='brands'>
        <BrandBox imageUrl='../src/assets/casio.png'/>
        <BrandBox imageUrl='../src/assets/tissot.png'/>
        <BrandBox imageUrl='../src/assets/armani.png'/>
        <BrandBox imageUrl='../src/assets/gshock.png'/>
        <BrandBox imageUrl='../src/assets/michealkors.png'/>
        <BrandBox imageUrl='../src/assets/boss.png'/>
        <BrandBox imageUrl='../src/assets/edifice.png'/>
        <BrandBox imageUrl='../src/assets/fossil.png'/>
    </div>
  )
}

export default Hero