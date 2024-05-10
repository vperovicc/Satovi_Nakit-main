import React from 'react'
import '../styles/Pandora.css'

const Pandora = () => {
  return (
    <div className='contain_pandora'>
        <h1>PRONAĐITE SAVRŠENI NAKIT ZA SVAKI TRENUTAK</h1>

        <div className='logo_line'>
            <img src='../src/assets/pandora.png'/>
            <div className='line_pandora'/>
        </div>

        <div className='content_pandora'>
            <div className='pan1'>
                <p className='pan1_p1'>Pandora narukvice su super opcija ako želite da dodate lični pečat svom stilu. Mogu se prilagoditi na razne načine, dodavanjem različitih privesaka i šarmova koji predstavljaju vaša interesovanja i uspomene.</p>
                <img src='../src/assets/pandora2.png' />
                <p className='pan1_p2'>Napravljene od kvalitetnih materijala, one su izdržljive i odličan dodatak vašoj kolekciji nakita.</p>
            </div>
            <div className='pan2'>
                <p>ZAŠTO PANDORA?</p>
            </div>
            <div className='pan3'>
                <img src='../src/assets/pandora3.png'/>
            </div>
        </div>
    </div>
  )
}

export default Pandora