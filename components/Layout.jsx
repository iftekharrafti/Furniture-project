import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideCart from './SideCart';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <SideCart />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;