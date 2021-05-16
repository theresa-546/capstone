import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai';

function Trace() {
  return (
    <>
   <h1 id='heading'>Trace your product</h1>
  <p id="text"> 1. Scan the QR code on the product using your
smartphone’s camera function <AiOutlineCamera/></p>  
<img id="trace-img" src='images/trace-img.jpg' alt=''/>
<p id="text"> 2. Open the link to see more about the product! </p>
  </>
  );
}

export default Trace;
