import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    const location = useLocation();
    const displayHeaderFooter = location.pathname === '/login' ? false: true;

    return (
        <div className='font-inter'>
            {displayHeaderFooter && <Navbar></Navbar>}
            <Outlet></Outlet>
           {displayHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;