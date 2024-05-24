import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../Components/Layout';

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
