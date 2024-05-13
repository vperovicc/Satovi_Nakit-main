import React from 'react'
import Footer from './components/Footer'
import Info from './components/Info'
import '../src/Satovi.css'

const Satovi = () => {
  return (
    <div id='satovi'>
        <div className='navlogo_satovi'>
            <img/>
            <div className='line_satovi'/>
            <h1>ASORTIMAN SATOVA</h1>
        </div>

        <div>
            <img/>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>

        <Info/>
        <Footer/>
    </div>
  )
}

export default Satovi