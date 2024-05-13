import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {

  const handleScrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToInfo = () => {
    const infoElement = document.getElementById('info');
    if (infoElement) {
      infoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToStarter = () => {
    const starterElement = document.getElementById('starter');
    if (starterElement) {
      starterElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div className='navbar_text'>
        <p onClick={handleScrollToStarter} >Pocetna</p>
        <p onClick={handleScrollToInfo} className='centerText'>O nama</p>
        <p onClick={handleScrollToContact}>Kontakt</p>
      </div>
      
      <div className='line' />
    </div>
  )
}

export default Navbar