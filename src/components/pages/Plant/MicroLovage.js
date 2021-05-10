import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import Farm from '../../Farm';
import { microLovageAbout} from './Data';
import 'react-alice-carousel/lib/alice-carousel.css';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';


function MicroLovage() {
  //array for component to show inside the slider
  let sliderArr = [<img id='plant-top-pic' src='images/lovage.jpg'/>, <img src='images/lovage size.jpg'/>];
  const [x, setX] = useState(0)
  const goLeft=()=>{
    x=== 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100);

  };
  const goRight=()=>{
    x=== -100*(sliderArr.length-1)?setX(0) : setX(x - 100);
  };

  return (
    <>
   
    <div className="productTitle">
      
    
            <h1 id="heading">Micro Lovage</h1>
            <div className='slider'>
      {
        sliderArr.map((item, index)=>{
          return(
            <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          );
        })
      }

     <button id='goLeft' onClick={goLeft}><IoIosArrowDropleftCircle className='arrow-icons'/></button>
     <button id='goRight' onClick={goRight}><IoIosArrowDroprightCircle className='arrow-icons'/></button>
    </div>
  
        </div>
    <div className='plantPage'>

    <div><About {...microLovageAbout}/></div>
    <div><Farm /></div>
    </div>


    </>
  );
}

export default MicroLovage;