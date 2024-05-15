// NavbarLogo.jsx

import React, { useState } from 'react';
import '../styles/NavbarLogo.css';
import ArrowLeft from '../assets/strelica.svg';
import Logo from '../assets/Logo.png';
import ArrowRight from '../assets/strelica2.svg';
import Burger from '../assets/burger-icon.svg';
import {Link} from 'react-router-dom';

const NavbarLogo = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <div className='nav'>
      <div className='navLeft'>
          <Link to='/satovi' className='linker'><div className='buttonBlack'><p>Satovi</p></div></Link>
        <img src={ArrowLeft} alt="ArrowLeft" />
      </div>
      <div className='navCenter'>
       <Link to='/'><img src={Logo} width={150} alt="Logo" /></Link> 
      </div>
      <div className='navRight'>
        <img src={ArrowRight} alt="ArrowRight" />
        <Link to='/nakit' className='linker'><div className='buttonBlack'><p>Nakit</p></div></Link>
      </div>
      <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-menu-icon'>
          <img src={Burger} alt="Burger Menu" />
        </div>
        <div className={`burger-menu-items ${showMenu ? 'show' : ''}`}>
        <Link to='/satovi' className='linker'><div className='burger-menu-item'>Satovi</div></Link>
        <Link to='/nakit' className='linker'><div className='burger-menu-item'>Nakit</div></Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarLogo;
