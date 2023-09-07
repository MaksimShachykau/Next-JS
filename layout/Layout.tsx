import React from 'react';
import { ILayoutProps } from './Layout.props';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
