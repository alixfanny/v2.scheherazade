import React from 'react';
import Carrousel from '../composant/carrousel';

import '../css/pages/homepage.css'


function HomePage() {
    return(
        <section className="home-page">
            <Carrousel/>
            <div className="overlay-filter"></div>
            <h1 className="title-name">Schéhérazade B</h1>
            <div className="info">
                <p className="quote-text">“La beauté commence au moment où vous décidez d'être vous-même.”</p>
                <p className="quote-author">Coco Chanel</p>
                <a href="/portfolio" target="_blank" rel="noopener noreferrer" className='button-portfolio'>
                    <button type="button" id="btnPortfolioAccess" className="btn btn-outline-light button-portfolio-access">
                    Accédez au Portfolio
                    </button>
                </a>
            </div>
        </section>
    )
}

export default HomePage