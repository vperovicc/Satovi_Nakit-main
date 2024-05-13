import React from 'react'
import '../styles/Footer.css'
import Shield from '../assets/shield.svg'
import Pricetag from '../assets/pricetag.svg'
import Round from '../assets/relines.svg'
import Tissot from '../assets/tissot_footer.svg'


const Footer = () => {
  return (
    <div className='container_footer'>
        <div className='strip_line'/>
        <div className='strip_footer'>
            
            <div className='strip'>
                <img src={Shield}/>
                <p>Sgurna Kupovina</p>
            </div>

            <div className='strip'>
                <img src={Pricetag}/>
                <p>Najbolje Cene</p>
            </div>

            <div className='strip'>
                <img src={Round}/>
                <p>Mogucnost Zamene</p>
            </div>
        </div>

        <div className='main_footer'>
            <div className='stuff_footer'>
                <img src={Tissot}/>
                <p className='maintext_footer'>STIL KOJI SE MERI VREMENOM</p>
                <div className='linksinfo_footer'>
                    <p className='sidetext_footer'>Neka vaš stil traje zauvek. Otkrijte našu kolekciju prestižnih satova poznatih brendova. Pronađite savršeni spoj elegancije i performansi u našoj prodavnici satova.</p>
                    <div className='insta_footer'>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            <div className='line_footer'/>
            <p className='copyright'>2024 - Sva prava zadrzana Satovi i Nakit</p>
        </div>
    </div>
  )
}

export default Footer