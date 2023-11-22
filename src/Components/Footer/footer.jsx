import React from 'react';
import White_Logo from '../../assets/White_Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
        <Link to="/">
          <img src={White_Logo} alt="Logo Kasa"/>
          </Link>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;