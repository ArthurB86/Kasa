import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'


function Header() {
    return (
        <nav className='header'>
        <Link to="/">
        <img src={Logo} alt='Logo'></img>
        </Link>
        <div className='Nav'>
        <Link to="/" className='a'>Home</Link>
        <Link to="/About">A Propos</Link>
        </div>
        </nav>
        )
}

export default Header