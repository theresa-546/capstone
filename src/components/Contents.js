import React from 'react';
import './Contents.css';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io';

function Contents({page, productImg, productName, alt, summary}) {
  return (
   
          
          <div className='content-container'>
              <Link exact to={page} style={{ textDecoration: 'none' }}>
                  <div className='productImg'>
                  
                    <img className='content-img' src={productImg} alt={alt} />
                  
                    <div className='content-info-container'><p className='productName'>{productName}</p> <p className='summary'>{summary}</p></div>
                    <IoIosArrowForward className='content-icon'/>
                      </div>
                  
                  </Link>

              </div>
                  
      

  );
}
export default Contents;
