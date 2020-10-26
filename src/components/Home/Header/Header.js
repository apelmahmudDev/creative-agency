import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className="header-contianer">
            <div className="content">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </header>
    );
};

export default Header;