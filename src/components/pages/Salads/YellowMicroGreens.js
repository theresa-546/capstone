import React from 'react';
import Contents from '../../Contents';
import { redMizuna, yellowMicroSaladPage, mizAmerica, mustardRuby, greenSorrel } from './Data';

function YellowMicroGreens() {
  return (
    <>
    <h1 id="heading">Yellow Micro Greens</h1>
    <img id='salad-pic' src='images/yellow.jpeg'/>
    
      <div className= 'saladContents'>
        <p className='subheading'>Salad Contents</p>
      <div><Contents {...redMizuna}/></div>
      <div><Contents {...mizAmerica}/></div>
      <div><Contents {...mustardRuby}/></div>
      <div><Contents {...greenSorrel}/></div>

      </div>
    </>
  );
}

export default YellowMicroGreens;