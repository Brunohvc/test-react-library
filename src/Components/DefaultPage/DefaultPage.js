import React from 'react';
import './DefaultPage.css';
import Header from '../Header';
import Footer from '../Footer';

const DefaultPage = ({ component: Component, ...rest }) => {
    return (
        <div className="container-fluid">
            <Header />
            <Component {...rest} />
            <Footer />
        </div >
    );
};


export default DefaultPage;
