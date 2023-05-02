import React from 'react'
import './index.css'
import Logo from '../assets/Logo.png'
import Carousel_0 from '../assets/Carousel_0.jpg'
import Carousel_1 from '../assets/Carousel_1.jpg'
import Carousel_2 from '../assets/Carousel_2.jpg'
import Carousel_3 from '../assets/Carousel_3.jpg'
import Carousel_4 from '../assets/Carousel_4.jpg'
import Carousel_5 from '../assets/Carousel_5.jpg'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  Carousel_0,
  Carousel_1,
  Carousel_2,
  Carousel_3,
  Carousel_4,
  Carousel_5
];

export default () => (

  <div className='home-container'>
    <img src={Logo} className='logo-img' />
    <div className='slide-container'>
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div className="each-slide-effect">
            <img key={index} style={{width: "100%"}} src={slideImage} />
          </div>
        ))} 
      </Slide>
    </div>
  </div>
)
