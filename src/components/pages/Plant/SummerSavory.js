import React, {useState} from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import { summerSavoryAbout} from './Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';

function SummerSavory() {
  //slider from Arslan's Make a Simple ReactJS Carousel! Using ReactSlick
  //https://www.youtube.com/watch?v=oCMwPNKbuag&ab_channel=Arslan
  let sliderArr = [<img id='plant-top-pic' src='images/summer savory.jpeg' alt=''/>, <img src='images/summer savory size.jpg' alt=''/>, <img src='images/summer savory size2.jpeg' alt=''/>, <video src='images/summer savory vid.mp4' width="100%" height="300" controls="controls" autoplay="false" />];
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
      
      <h1 id="heading">Summer Savory</h1>
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

  <div><About {...summerSavoryAbout}/></div>
    
    <Traceability/>
</div>
      
    </>
  );
}

export default SummerSavory;