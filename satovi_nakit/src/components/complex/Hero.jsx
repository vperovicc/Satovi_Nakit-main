import React from 'react'
import './Hero.css'

const Hero = ({Title,Headline,Picture}) => {
  return (
    <div className='container_complexBrand'>
        <p>{Title}</p>
        <div className='content_complexBrand'>
            <p>{Headline}</p>
            <img src={Picture}/>
        </div>
    </div>
  )
}

export default Hero