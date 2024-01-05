import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/composent/carrousel.css';

import photo1 from '../images/carrousel/1.jpg';
import photo2 from '../images/carrousel/2.jpg';
import photo3 from '../images/carrousel/3.jpg';
import photo4 from '../images/carrousel/4.jpg';
import photo5 from '../images/carrousel/5.jpg';
import photo6 from '../images/carrousel/6.jpg';
import photo7 from '../images/carrousel/7.jpg';
import photo8 from '../images/carrousel/8.jpg';
import photo1Mobile from '../images/carrousel/1-mobile.jpg';
import photo2Mobile from '../images/carrousel/2-mobile.jpg';
import photo3Mobile from '../images/carrousel/3-mobile.jpg';
import photo4Mobile from '../images/carrousel/4-mobile.jpg';
import photo5Mobile from '../images/carrousel/5-mobile.jpg';
import photo6Mobile from '../images/carrousel/6-mobile.jpg';
import photo7Mobile from '../images/carrousel/7-mobile.jpg';
import photo8Mobile from '../images/carrousel/8-mobile.jpg';

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8
];

const imagesMobile = [
  photo1Mobile,
  photo2Mobile,
  photo3Mobile,
  photo4Mobile,
  photo5Mobile,
  photo6Mobile,
  photo7Mobile,
  photo8Mobile
];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, 
};

function Carrousel() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1420);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImages = isMobile ? imagesMobile : images;

    return (
      <div className="carrousel">
          <Slider {...carouselSettings}>
            {currentImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Schéhérazade ${index + 1}`} />
              </div>
            ))}
          </Slider>
      </div>
    );
  }
  
  export default Carrousel;
  
  
  