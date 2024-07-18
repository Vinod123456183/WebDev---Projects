import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/brent-cox-3E20KxiU2dU-unsplash.jpg';
import img2 from '../assets/javad-esmaeili-LPWye8B0BC8-unsplash.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
{/* note how to use image on react */}


const Services = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false} >

      <div>

        <img src={img1} alt="P1" />
        <p className='legend'></p>

        
      </div>


      <div>

        <img src={img2} alt="P2" />
        <p className='legend'></p>


      </div>


      </Carousel>
    </div>
  )
}

export default Services
