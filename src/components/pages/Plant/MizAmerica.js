import React, {useState} from 'react';
import HeroSection from '../../HeroSection';
import About from '../../About';
import Traceability from '../../Traceability';
import { redMizuna, mizAmericaAbout, redMizunaTraceability } from './Data';
import AliceCarousel from 'react-alice-carousel';
import Farm from '../../Farm';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';

function MizAmerica() {
  let sliderArr = [<img id='plant-top-pic' src='images/miz america mizuna.jpg'/>, <img src='images/miz america mizuna size.jpg'/>, <img id='plant-top-pic' src='images/miz america mizuna pot.jpg'/>, <video src='images/miz america mizuna vid.mp4' width="500" height="300" controls="controls" autoplay="false" />];
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
      
      <h1 id="heading">Micro Miz America Mizuna</h1>
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

  <div><About {...mizAmericaAbout}/></div>
    <Farm/>
</div>
      
    </>
  );
}

export default MizAmerica;