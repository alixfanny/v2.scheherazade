import '../css/pages/header.css';
import { Link } from 'react-router-dom';
import Mensuration from '../composant/mensuration';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function RegularMenu() {
    const [showMensuration, setShowMensuration] = useState(false);

    const handleMouseEnter = () => {
        setShowMensuration(true);
    };

    const handleMouseLeave = () => {
        setShowMensuration(false);
    };
    return(
        <div className='menu'>
            <p className='mensuration menu-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Mensuration</p>
            {showMensuration && <Mensuration onClose={() => setShowMensuration(false)} />}

            <Link to='/portfolio'>
                <p className=' folio menu-item'>Portfolio</p>
            </Link>

            <Link to="/apropos">
                <p className="about menu-item">A propos</p>
            </Link>

            <Link to="/avis">
                <p className="avis menu-item">Avis</p>
            </Link>

            <Link to="/contact">
                <p className="contact menu-item">Contact</p>
            </Link>

            <a href="https://www.instagram.com/scheherazade_portfolio" className='lien-instagram' target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className='logo-instagram' />
            </a>
        </div>
    )
}

export default RegularMenu