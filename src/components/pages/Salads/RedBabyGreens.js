import React from 'react';
import Contents from '../../Contents';
import { greenMizuna, summerSavory, leisureCilantro, pea, blueBasil, lemonBasil, parsley } from './Data';

function RedBabyGreens() {
  return (
    <>
    <div className='salad-preview'>
    <h1 id="heading">Red Baby Greens</h1>
    <img id='salad-pic' src='images/red.jpeg'/>
    
      <div className= 'saladContents'>
        <p className='subheading'>Salad Contents</p>
      <div><Contents {...greenMizuna}/></div>
      <div><Contents {...summerSavory}/></div>
      <div><Contents {...leisureCilantro}/></div>
      <div><Contents {...pea}/></div>
      <div><Contents {...blueBasil}/></div>
      <div><Contents {...lemonBasil}/></div>
      <div><Contents {...parsley}/></div>
      
      </div>
      </div>
    </>
  );
}

export default RedBabyGreens;

