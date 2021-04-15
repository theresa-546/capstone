import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

function HeroSection({productName, img1, img2, img3}) {
  return (
    <>
      <div className="productTitle">
            <h1>{productName}</h1>
        <AliceCarousel>
            <img src={img1} alt='' className="yours-custom-class" />
            <img src={img2} alt='' className="yours-custom-class" />
            <img src={img3} alt='' className="yours-custom-class" />
    
            </AliceCarousel>
       
        </div>
    </>
  );
}

export default HeroSection;

// import React, { Component } from 'react'

// import ReactBnbGallery from 'react-bnb-gallery'

// const photos = [{
//   photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
//   caption: "Viñales, Pinar del Río, Cuba",
//   subcaption: "Photo by Simon Matzinger on Unsplash",
//   thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
// }, {
//   photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
//   caption: "La Habana, Cuba",
//   subcaption: "Photo by Gerardo Sanchez on Unsplash",
//   thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
// }, {
//   photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
//   caption: "Woman smoking a tobacco",
//   subcaption: "Photo by Hannah Cauhepe on Unsplash",
//   thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
// }];

// class Example extends Component {
//   constructor() {
//     super(...arguments);
//     this.state = { galleryOpened: false };
//     this.toggleGallery = this.toggleGallery.bind(this);
//   }

//   toggleGallery() {
//     this.setState(prevState => ({
//       galleryOpened: !prevState.galleryOpened
//     }));
//   }

//   render () {
//     return (
//       <>
//       <button onClick={this.toggleGallery}>Open photo gallery</button>
//       <ReactBnbGallery
//         show={this.state.galleryOpened}
//         photos={photos}
//         onClose={this.toggleGallery} />
//         </>
//     )
//   }
// };

