import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div className=''>
                    <a href="/Shop">Shop</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/About">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;