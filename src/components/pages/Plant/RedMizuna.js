import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import { redMizunaAbout} from './Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';


function RedMizuna() {
  //slider from Arslan's Make a Simple ReactJS Carousel! Using ReactSlick
  //https://www.youtube.com/watch?v=oCMwPNKbuag&ab_channel=Arslan
  let sliderArr = [<img id='plant-top-pic' src='images/red mizuna.jpg' alt=''/>, <img src='images/red mizuna size 2.jpg' alt=''/>, <img id='plant-top-pic' src='images/red mizuna pot.jpg' alt=''/>, <video src='images/red mizuna vid.mp4' width="100%" height="300" controls="controls" autoplay="false" />];
  const [x, setX] = useState(0)
  const goLeft=()=>{
    x=== 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100);

  };
  const goRight=()=>{
    x=== -100*(sliderArr.length-1)?setX(0) : setX(x - 100);
  };

  return (
    <>
   <div className='plant_info-container'>
    <div className="productTitle">
      
    
            <h1 id="heading">Micro Red Mizuna</h1>
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

    <div><About {...redMizunaAbout}/></div>
    <div><Traceability/></div>
    </div>
    </div>

    </>
  );
}

export default RedMizuna;