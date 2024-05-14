import React from 'react'
import '../styles/SatoviComp.css'
import Hand from '../assets/watch_hand.png'

const SatoviComp = () => {
  return (
    <div className='container_satovi'>
        <div className='line_satovi'/>
        <h1>ASORTIMAN SATOVA</h1>

        <div className='stuff_satovi'>
            <img src={Hand}/>
            <div className='brands_satovi'>
                <div className='brands_p'>
                  <p>TISSOT</p>
                  <p>VOSTOK</p>
                  <p>G-SHOCK</p>
                  <p>EDIFICE</p>
                  <p>CASIO</p>
                  <p>FOSSIL</p>
                  <p>GUESS</p>
                  <p>BOSS</p>
                  <p>CERRUTI 1881</p>
                  <p>MICHEAL KORS</p>
                  <p>SKAGEN</p>
                  <p>PAUL HEWITT</p>
                </div>
                
                <div className='brands_p'>
                  <p>ARMANI EXCHANGE</p>
                  <p>ESPRIT</p>
                  <p>KENETH COLE</p>
                  <p>POLICE</p>
                  <p>SECTOR</p>
                  <p>FESTINA</p>
                  <p>PIERRE RICAUD</p>
                  <p>ROSEFIELD</p>
                  <p>SANTA BARBARA POLO</p>
                  <p>BIGOTTI</p>
                  <p>SERGIO TACHINI</p>
                  <p>FREELOOK</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SatoviComp