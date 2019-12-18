import React from 'react';

import logo from './logo.svg';
import './Header.css';

const Header = () => (
    <header className='ML-header'>
        <img src={logo} className='ML-logo' alt='logo' />
        <h1 className='ML-title'>My Movies</h1>
    </header>
)

export default Header;