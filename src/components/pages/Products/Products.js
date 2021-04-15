import React from 'react';
import { blueHerbs, yellowMicro, redGreens} from './Data';
import ProductButton from '../../ProductButton';

function Products() {
  return (
    <>
    <div className='productsPage'>
      <h1 id="heading">All Products</h1>
      <div className='productList'>
      <div><ProductButton {...yellowMicro} /></div>
      <div><ProductButton {...blueHerbs} /></div>
      <div><ProductButton {...redGreens} /></div>
      </div>

      </div>
    </>
  );
}

export default Products;
