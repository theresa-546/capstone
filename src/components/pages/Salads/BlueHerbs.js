import React from 'react';
import Contents from '../../Contents';
import { microLovage, lemonBalm, dianthus, yarrowFlower } from './Data';

function BlueHerbs() {
  return (
    <>
      <div className='salad-preview'>
    <h1 id="heading">Blue Herbs Salad</h1>
    <img id='salad-pic' src='images/blue.jpeg' alt=''/>
    
      <div className= 'saladContents'>
        <p className='subheading'>Salad Contents</p>
      <div><Contents {...lemonBalm}/></div>
      <div><Contents {...microLovage}/></div>
      <div><Contents {...dianthus}/></div>
      <div><Contents {...yarrowFlower}/></div>
     

      </div>
      </div>
    </>
  );
}

export default BlueHerbs;
