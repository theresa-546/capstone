import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import Farm from '../../Farm';
import { mustardRubyAbout  } from './Data';
import AliceCarousel from 'react-alice-carousel';
import { mustardRuby } from '../Salads/Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';

function MustardRuby() {
  let sliderArr = [<img id='plant-top-pic' src='images/micro ruby streak mustard.jpg'/>, <img src='images/micro ruby streak mustard size.jpg'/>, <video src='images/micro ruby streak mustard vid.mp4' width="500" height="300" controls="controls" autoplay="false" />];
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
      
            <h1 id="heading">Micro Mustard (Ruby Streaks)</h1>
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

    <div><About {...mustardRubyAbout}/></div>
    <div><Farm /></div>
    </div>


    </>
  );
}

export default MustardRuby;