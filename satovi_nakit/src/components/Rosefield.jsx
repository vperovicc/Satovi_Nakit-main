import React from 'react'
import '../styles/Rosefield.css'
import RosefieldLogo from '../assets/rosefield.png'
import Rosefield1 from '../assets/rosefield1.png'
import Rosefield2 from '../assets/rosefield2.png'

const Rosefield = () => {
  return (
    <div className='contain_rosefield'>
        <div className='linelogo_rosefield'>
            <img src={RosefieldLogo} />
            <div className='line_rosefield'/>
        </div>

        <div className='content_rosefield'>
            <img className='rosefield_pic1' src={Rosefield1} />
            <div className='text_rosefield'>
                <p className='text_rosefield_p1'>Rosefield nakit je pravi izbor ako voliš minimalizam i eleganciju. Ovaj brend nudi sofisticirane komade koji se savršeno uklapaju uz svaki outfit.</p>
                <p className='text_rosefield_p2'>TAJNE ROSEFIELD NAKITA</p>
                <p className='text_rosefield_p3'>Bilo da tražiš jednostavnu narukvicu, ogrlicu ili minđuše, Rosefield komadi su svedeni i moderni, dajući ti onaj dodatni touch. Kvalitetna izrada i pažnja prema detaljima čine njihov nakit izdržljivim i vrednim investicije.</p>
            </div>
            <img className='rosefield_pic2' src={Rosefield2} />
        </div>
    </div>
  )
}

export default Rosefield