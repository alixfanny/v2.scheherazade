import '../css/pages/header.css';
import { Link } from 'react-router-dom';
import Mensuration from '../composant/mensuration';
import { useState} from 'react';

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
                <p className=' folio menu-item'>portfolio</p>
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
        </div>
    )
}

export default RegularMenu