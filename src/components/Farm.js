import React from 'react';
import './Traceability.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Farm() {
    return (    
    <>
      
            <div className='col'>
             
              <div className='top-line'>Traceability</div>
                 <Link to='/farm'> <div><img className='farm-img' src='images/tribeca.jpeg'/></div> </Link>
                <div className='farmTitle'><p>
                  Farm.One Tribeca
                </p> <Link to='/farm'>
                  <Button buttonSize='btn--mobile' buttonColor='blue'>
                    Learn More
                  </Button>
                </Link> 
                </div>
                <div className='farm-info'><p>
                  Tribeca, New York
                </p>
            </div>
              
                
              </div>
            
        
          
       
    </>
    );
}

export default Farm;
