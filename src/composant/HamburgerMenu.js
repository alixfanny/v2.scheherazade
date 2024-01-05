import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mensuration from '../composant/mensuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/composent/hamburgerMenu.css';

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMensuration, setShowMensuration] = useState(false);

    const handleMensurationClick = () => {
        setShowMensuration(true);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleMouseEnter = () => {
        setShowMensuration(true);
    };
    const handleMouseLeave = () => {
        setShowMensuration(false);
    };

    return (
        <div className="hamburger-menu">
            {!isOpen && (
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='hamburger-icon'/>
            )}
            {isOpen && (
                <div className="menu-content menu-background">

                    <p className='mensuration menu-item' 
                       onMouseEnter={handleMouseEnter} 
                       onMouseLeave={handleMouseLeave}
                       onClick={handleMensurationClick}>
                        Mensuration
                    </p>
                    {showMensuration && <Mensuration onClose={() => setShowMensuration(false)} />}

                    <Link to="/portfolio" onClick={closeMenu}>
                        <p className=" menu-item">portfolio</p>
                    </Link>

                    <Link to="/apropos" onClick={closeMenu}>
                        <p className="about menu-item">A propos</p>
                    </Link>

                    <Link to="/avis" onClick={closeMenu}>
                        <p className="avis menu-item">Avis</p>
                    </Link>

                    <Link to="/contact" onClick={closeMenu}>
                        <p className="contact menu-item">Contact</p>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default HamburgerMenu