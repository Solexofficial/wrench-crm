import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <NavLink to='/' className='logo-link'>
      <div className='logo'>
        <LogoSVG />
        <div className='logo-title'>Wrench CRM</div>
      </div>
    </NavLink>
  );
};

export default Logo;
