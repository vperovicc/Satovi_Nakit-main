// NavbarLogo.jsx

import React, { useState } from 'react';
import '../styles/NavbarLogo.css';
import ArrowLeft from '../assets/strelica.svg';

const NavbarLogo = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='nav'>
      <div className='navLeft'>
        <div className='buttonBlack'><p>Satovi</p></div>
        <img src={ArrowLeft} alt="ArrowLeft" />
      </div>
      <div className='navCenter'>
        <img src='../src/assets/Logo.png' width={150} alt="Logo" />
      </div>
      <div className='navRight'>
        <img src='../src/assets/strelica2.svg' alt="ArrowRight" />
        <div className='buttonBlack'><p>Nakit</p></div>
      </div>
      <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-menu-icon'>
          <img src='../src/assets/burger-icon.svg' alt="Burger Menu" />
        </div>
        <div className={`burger-menu-items ${showMenu ? 'show' : ''}`}>
          <div className='burger-menu-item'>Satovi</div>
          <div className='burger-menu-item'>Nakit</div>
        </div>
      </div>
    </div>
  );
}

export default NavbarLogo;
