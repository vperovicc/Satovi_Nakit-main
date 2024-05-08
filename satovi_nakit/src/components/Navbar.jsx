import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_text'>
        <p>Pocetna</p>
        <p className='centerText'>O nama</p>
        <p>Kontakt</p>
      </div>
      
      <div className='line' />
    </div>
  )
}

export default Navbar