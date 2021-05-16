import React from 'react';
import './About.css';

function FarmAbout() {
    return (    
    <>
      
            <div className='col'>
              <div className='farm-about_container'>
              <div className='top-line'>Farm.One Tribeca</div>
                  <div><img src='images/tribeca.jpeg' alt='farm.one tribeca'/></div> 
              <p className='trib-text' >
                  Tribeca, New York
                </p>
                <div className='subheading'>About</div>
            
                <p id='trib-desc'>
                This farm has over 1,200 square feet of vertical 
racks, using Deep Water Culture and Flood and 
Drain systems. The farm is designed to have 
multiple different growing areas, allowing for a 
huge variety of crops to be grown. Built in tight 
New York city basement surroundings, the farm 
is as efficient as possible, using every square 
inch of space.</p>
                
              </div>
            </div>
        
    </>
    );
}

export default FarmAbout;
