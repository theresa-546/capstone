import React from 'react';
import FarmAbout from '../../FarmAbout';
import { blueHerbs, yellowMicro, redGreens} from './Data';
import ProductButton from '../../ProductButton';

function Farm() {
  return (
    <>
      
      <div className='productsPage'>
      <FarmAbout/>
      <h2 className= 'subheading'>Other Products</h2>
      <div className='productList'>
      <div><ProductButton {...yellowMicro} /></div>
      <div><ProductButton {...blueHerbs} /></div>
      <div><ProductButton {...redGreens} /></div>
      </div>

      </div>
    </>
  );
}

export default Farm;