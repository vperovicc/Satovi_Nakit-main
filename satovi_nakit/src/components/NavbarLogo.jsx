// NavbarLogo.jsx

import React, { useState } from 'react';
import '../styles/NavbarLogo.css';
import ArrowLeft from '../assets/strelica.svg';
import Logo from '../assets/Logo.png';
import ArrowRight from '../assets/strelica2.svg';
import Burger from '../assets/burger-icon.svg';

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
        <img src={Logo} width={150} alt="Logo" />
      </div>
      <div className='navRight'>
        <img src={ArrowRight} alt="ArrowRight" />
        <div className='buttonBlack'><p>Nakit</p></div>
      </div>
      <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-menu-icon'>
          <img src={Burger} alt="Burger Menu" />
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
