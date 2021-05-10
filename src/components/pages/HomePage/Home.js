import React from 'react';
import { Button} from '../../Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='home_first-block' ><p id='home-title'>Track your food with 
<p id='home-title_bold-text'>Food Bio</p></p>
</div>

<div className='mockup-row' ><p id='home-subtitle'>Designed to help you
trace the origins of your
food. <br></br> Scan the QR code
on your farm produce
to check information</p>
<img id='mockup' src='images/mockup.png'/>
</div>

<div className='home_second-block'>
  <p id='home-title-white'>Why traceability matters</p>
  <p id='home-subtitle-white'>The ability to trace back the history of a food product is a crucial process that ensures food quality and maintains food safety.</p>

</div>

<div className='home-third-block'><p id='home-title'>Partnered with </p> 
<img id='farmone-logo' src='images/farmone-logo.png'/>
<p id='home-farm-text'>Farm.One is an urban, vertical farm in New York City, that sells salad harvested straight from their farm.</p>
<img id='home-farm-pic' src='images/farmone.jpeg'/>
<p id='home-farm-text'>All product information including 
images and videos used on this site is credited to farm.one</p>
</div>

   
    </>
  );
}

export default Home;
