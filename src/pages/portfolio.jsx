import '../css/pages/portfolio.css'
import React from 'react';
import photo0 from '../images/portfolio/0.jpg';
import photo1 from '../images/portfolio/1.jpg';
import photo2 from '../images/portfolio/2.jpg';
import photo3 from '../images/portfolio/3.jpg';
import photo4 from '../images/portfolio/4.jpg';
import photo5 from '../images/portfolio/5.jpg';
import photo6 from '../images/portfolio/6.jpg';
import photo7 from '../images/portfolio/7.jpg';
import photo8 from '../images/portfolio/8.jpg';
import photo9 from '../images/portfolio/9.jpg';
import photo10 from '../images/portfolio/10.jpg';
import photo11 from '../images/portfolio/11.jpg';
import photo12 from '../images/portfolio/12.jpg';
import photo13 from '../images/portfolio/13.jpg';
import photo14 from '../images/portfolio/14.jpg';
import photo15 from '../images/portfolio/15.jpg';
import photo16 from '../images/portfolio/16.jpg';
import photo17 from '../images/portfolio/17.jpg';
import photo18 from '../images/portfolio/18.jpg';
import photo19 from '../images/portfolio/19.jpg';
import photo20 from '../images/portfolio/20.jpg';
import photo21 from '../images/portfolio/21.jpg';
import photo22 from '../images/portfolio/22.jpg';
import photo23 from '../images/portfolio/23.jpg';
import photo24 from '../images/portfolio/24.jpg';
import photo25 from '../images/portfolio/25.jpg';
import photo26 from '../images/portfolio/26.jpg';


const photos =[
  photo0,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26
]


function Portfolio() {
    return(
        <div className="portfolio">
            {photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Schéhérazade ${index + 1}`} />
              </div>
            ))}
        </div>
    )
}

export default Portfolio