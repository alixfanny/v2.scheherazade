import React, { useEffect } from 'react';
import '../css/composent/mensuration.css'

function Mensuration({onClose}) {

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.querySelector('.overlay');
            if (modal && !modal.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return(
        <div className="overlay">
            <div className="overlay-content">
                <p>Taille: 1.73m</p>
                <p> Poids: 56kg</p>
                <p>Tour de poitrine: 84cm</p>
                <p>Tour de taille: 62cm</p>
                <p>Tour de Hanche: 84cm</p>
            </div>
        </div>
    )
}

export default Mensuration