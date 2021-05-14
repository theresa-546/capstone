import React, { useState }  from 'react';
import About from '../../About';
import Traceability from '../../Traceability';
import { yarrowFlowerAbout } from './Data';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';


function YarrowFlower() {
  //array for component to show inside the slider
  let sliderArr = [<img src='images/yarrow flower.jpg'/>, <img src='images/yarrow flower size.jpg'/>];
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
      
    
            <h1 id="heading">Yarrow Flower</h1>
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

    <div><About {...yarrowFlowerAbout }/></div>
    <div><Traceability/></div>
    </div>


    </>
  );
}

export default YarrowFlower;