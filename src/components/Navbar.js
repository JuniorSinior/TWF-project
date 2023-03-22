import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'>푸드플래닛</Link>
            </div>
            <ul className='navbar-menu'>
                <li><Link to='/map'>MAP</Link></li>
                <li><Link to='/planning'>PLANNING</Link></li>
                <li><Link to='/mypage'>MYPAGE</Link></li>
                <li><Link to='/login'>LOGIN</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;