import React from 'react';
import Header from '../../components/Layout/Header.jsx';
import Footer from '../../components/Layout/Footer.jsx';

export default function Layout({children}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
