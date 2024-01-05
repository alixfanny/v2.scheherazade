import '../css/pages/header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegularMenu from '../composant/regularMenu';
import HamburgerMenu from '../composant/HamburgerMenu';

function Header() {


    const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 1300);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    

    return(
        <div className="header">
            <div className="brandname">
                <h1 className="brandname-name">Schéhérazade B</h1>
                <p className="brandname-work">Top Model</p> 
            </div>
            {isMobile ? (
                <HamburgerMenu />
            ) : (
                <RegularMenu />
            )}
        </div>
                
    )
}

export default Header