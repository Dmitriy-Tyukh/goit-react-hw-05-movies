import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Container} from '../Header/Header.styled'
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
