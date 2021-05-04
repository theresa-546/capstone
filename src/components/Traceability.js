import React from 'react';
import './Traceability.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Traceability({harvestDate, packageDate}) {
    return (    
    <>
    <div className='col'>
            
              <div className='top-line'>Traceability</div>
                 <Link to='/farm'> <div><img src='images/tribeca.jpeg'/></div> </Link>
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
                <p>
                  Harvest Date: {harvestDate}
                </p>
                <p>
                  Packaging Date: {packageDate}
                </p>
            </div>
              </div>
            
  
    </>
    );
}

export default Traceability;
