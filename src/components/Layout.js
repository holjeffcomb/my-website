import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            {children}
            <Footer />
        </div>
    )
}