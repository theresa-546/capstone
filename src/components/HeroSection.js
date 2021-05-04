import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

function HeroSection({productName, img1, img2, img3}) {
  return (
    <>
      <div className="productTitle">
            <h1>{productName}</h1>
        <AliceCarousel>
            <img src={img1} alt='' className="yours-custom-class" />
            <img src={img2} alt='' className="yours-custom-class" />
            <img src={img3} alt='' className="yours-custom-class" />
    
            </AliceCarousel>
       
        </div>
    </>
  );
}

export default HeroSection;
