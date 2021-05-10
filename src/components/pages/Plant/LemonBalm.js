import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import Farm from '../../Farm';
import { lemonBalmAbout, lemonBalmTraceability } from './Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';


function LemonBalm() {
  //array for component to show inside the slider
  let sliderArr = [<img id='plant-top-pic' src='images/lemon balm.jpg'/>, <img src='images/lemon balm size.jpeg'/>];
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
      
    
            <h1 id="heading">Lemon Balm</h1>
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

    <div><About {...lemonBalmAbout}/></div>
    <div><Farm /></div>
    </div>


    </>
  );
}

export default LemonBalm;