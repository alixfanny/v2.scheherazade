import '../css/pages/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Mensuration from '../composant/mensuration';

function Header() {

    const [showMensuration, setShowMensuration] = useState(false);

    const handleMouseEnter = () => {
        setShowMensuration(true);
    };

    const handleMouseLeave = () => {
        setShowMensuration(false);
    };

    return(
        <div className="header">
            <div className="brandname">
                <Link to="/portfolio">
                    <h1 className="brandname-name">Schéhérazade B</h1>
                </Link>
                <p className="brandname-work">Top Model</p> 
            </div>
            <div className="menu">
                <p className='mensuration menu-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Mensuration</p>
                {showMensuration && <Mensuration onClose={() => setShowMensuration(false)} />}
                <Link to="/apropos">
                    <p className="about menu-item">A propos</p>
                </Link>

                <Link to="/avis">
                    <p className="avis menu-item">Avis</p>
                </Link>

                <Link to="/contact">
                    <p className="contact menu-item">Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Header