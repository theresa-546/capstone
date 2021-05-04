import React from 'react';
import './ProductButton.css';
import { Link } from 'react-router-dom';

function ProductButton({page, productImg, productName, alt}) {
  return (
       
         
      <div className='product_button-container'>
      <Link exact to={page} style={{ textDecoration: 'none' }}>
          <div className='product_button-info'>
            
            <p id='product-text'>{productName}</p>
            <img src={productImg} alt={alt} />
            
            
          </div>
          </Link>

      </div>
          
        
      
  
  );
}
export default ProductButton;
