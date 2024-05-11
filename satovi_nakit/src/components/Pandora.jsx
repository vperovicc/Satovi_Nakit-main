import React from 'react'
import '../styles/Pandora.css'
import PandoraLogo from '../assets/pandora.png'
import Pandora2 from '../assets/pandora2.png'
import Pandora3 from '../assets/pandora3.png'

const Pandora = () => {
  return (
    <div className='contain_pandora'>
        <h1>PRONAĐITE SAVRŠENI NAKIT ZA SVAKI TRENUTAK</h1>

        <div className='logo_line'>
            <img src={PandoraLogo} />
            <div className='line_pandora'/>
        </div>

        <div className='content_pandora'>
            <div className='pan1'>
                <p className='pan1_p1'>Pandora narukvice su super opcija ako želite da dodate lični pečat svom stilu. Mogu se prilagoditi na razne načine, dodavanjem različitih privesaka i šarmova koji predstavljaju vaša interesovanja i uspomene.</p>
                <img src={Pandora2} />
                <p className='pan1_p2'>Napravljene od kvalitetnih materijala, one su izdržljive i odličan dodatak vašoj kolekciji nakita.</p>
            </div>
            <div className='pan2'>
                <p>ZAŠTO PANDORA?</p>
            </div>
            <div className='pan3'>
                <img src={Pandora3} />
            </div>
        </div>
    </div>
  )
}

export default Pandora