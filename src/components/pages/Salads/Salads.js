import React from 'react';
import HeroSection from '../../HeroSection';
import Contents from '../../Contents';
import { blueHerbsSaladPage, lemonBalm } from './Data';

function Salads() {
  return (
    <>
     <h1 id="heading">Blue Herbs Salad</h1>
    <img id='salad-pic' src='images/blue.jpeg'/>
    
      <div className= 'saladContents'>
        <p className='subheading'>Contents</p>
      <div><Contents {...lemonBalm}/></div>
      <div></div>
      <div></div>
      <div></div>

      </div>
      
      
    </>
  );
}

export default Salads;
