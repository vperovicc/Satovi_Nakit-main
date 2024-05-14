import React from 'react'
import '../styles/SatoviComp.css'
import Hands from '../assets/hands.png'

const NakitComp = () => {
  return (
    <div className='container_satovi'>
        <div className='line_satovi'/>
        <h1>ASORTIMAN NAKITA</h1>

        <div className='stuff_satovi'>
            <img src={Hands}/>
            <div className='brands_satovi'>
                <div className='brands_p'>
                  <p>PANDORA</p>
                  <p>GUESS</p>
                  <p>LOTUS</p>
                  <p>VICTORIA CRUZ</p>
                  <p>MAJORICA</p>
                  <p>TI SENTO</p>
                  <p>FREELOOK</p>
                  <p>ROSEFIELD</p>
                  <p>SANTA BARBARA POLO</p>
                  <p>OLIVER WEBER</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NakitComp