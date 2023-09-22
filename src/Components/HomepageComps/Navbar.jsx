
import React, { useState, useEffect } from 'react';

import '../../Styling/Navbar.css';
import Logo from '../../assets/icons/logo.svg'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    function handleHamburger() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="">  <img src={Logo} alt="" className='logo' /> </div>
            </div>
            <a href="#" className='toggle-button'
                onClick={handleHamburger}>
                <span className='bar' />
                <span className='bar' />
                <span className='bar' />

            </a>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <ul >
                    <div className='middleSection'>
                        <li>Buchung</li>
                        <li>Einrichtungen</li>
                        <li>Über uns</li>
                        <li>Lage</li>
                        <li>Kontakt</li>
                    </div>


                    <div className="rightLoginbutton">
                        <li className='loginButton'>
                            <div className="logintext">Anmelden</div>
                        </li>
                    </div>

                </ul>
            </div>
        </nav>
    );
}
