import React, { useState } from 'react';
import AppViews from '../../app-views';
import Container from '../../components/layout-components/Container';
import Header from '../../components/layout-components/Header';
import Sidebar from '../../components/layout-components/Sidebar';

const AppLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <>
      <Header showMenu={showMenu} onOpenMenu={toggleShowMenu} />
      <main className='app-layout'>
        <Sidebar show={showMenu} />
        <Container>
          <section className='app-content'>
            <AppViews />
          </section>
        </Container>
      </main>
    </>
  );
};

export default AppLayout;
