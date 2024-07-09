import { Outlet } from 'react-router-dom';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';

const Layout = () => {
  return (
    <>
        <div className="main_container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}

export default Layout