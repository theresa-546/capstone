import React from 'react';
import Contents from '../../Contents';
import { redMizuna, mizAmerica, mustardRuby, greenSorrel } from './Data';

function YellowMicroGreens() {
  return (
    <>
    <div className='salad-preview'>
    <h1 id="heading">Yellow Micro Greens</h1>
    <img id='salad-pic' src='images/yellow.jpeg' alt=''/>
    
      <div className= 'saladContents'>
        <p className='subheading'>Salad Contents</p>
      <div><Contents {...redMizuna}/></div>
      <div><Contents {...mizAmerica}/></div>
      <div><Contents {...mustardRuby}/></div>
      <div><Contents {...greenSorrel}/></div>
     

      </div>
      </div>
    </>
  );
}

export default YellowMicroGreens;
