import React, { useState } from 'react';
import Logo from '../../common-components/Logo';
import NavProfile from '../../common-components/NavProfile';
import Container from '../Container';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/svg/burger_menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../../assets/svg/close_menu.svg';

type HeaderProps = {
  showMenu?: boolean;
  onOpenMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({ showMenu, onOpenMenu }) => {
  return (
    <header className='header'>
      <Container>
        <div className='header-wrapper'>
          <button className={`header-menu__button ${showMenu ? 'active' : ''}`} onClick={onOpenMenu}>
            {showMenu ? (
              <CloseMenuIcon fill='#fff' height={32} width={32} />
            ) : (
              <BurgerMenuIcon fill='#fff' height={32} width={32} />
            )}
          </button>
          <Logo />
          <NavProfile />
        </div>
      </Container>
    </header>
  );
};

export default Header;
