import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import { mustardRubyAbout  } from './Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';

function MustardRuby() {
  //slider from Arslan's Make a Simple ReactJS Carousel! Using ReactSlick
  //https://www.youtube.com/watch?v=oCMwPNKbuag&ab_channel=Arslan
  let sliderArr = [<img id='plant-top-pic' src='images/micro ruby streak mustard.jpg' alt=''/>, <img src='images/micro ruby streak mustard size.jpg' alt=''/>, <video src='images/micro ruby streak mustard vid.mp4' width="100%" height="300" controls="controls" autoplay="false" />];
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
    <div><Traceability/></div>
    </div>


    </>
  );
}

export default MustardRuby;