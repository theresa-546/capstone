import React from 'react';
import './ProductButton.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function ProductButton({page, productImg, productName, alt}) {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
          
         
      <div className='pricing__container-cardInfo'>
      <Link exact to={page} style={{ textDecoration: 'none' }}>
          <div className='icon'>
          
            <img src={productImg} alt={alt} />
            <p>{productName}</p>
            
          </div>
          </Link>

      </div>
          
        
      
    </IconContext.Provider>
  );
}
export default ProductButton;
