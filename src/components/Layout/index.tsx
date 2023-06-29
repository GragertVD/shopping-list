import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { LayoutContainer } from './style';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutContainer>
  )
}

export { Layout }