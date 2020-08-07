import React from 'react';
import './DefaultPage.css';
import Header from '../Header';
import Footer from '../Footer';

const DefaultPage = ({ component: Component, ...rest }) => {
    return (
        <div className="default-container">
            <Header />
            <div className="container-fluid">
                <Component {...rest} />
            </div >
            <Footer />
        </div>
    );
};


export default DefaultPage;
