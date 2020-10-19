import React from 'react';
import { Slide } from 'react-slideshow-image';

import Fitness from './images/fitness.png'
import Hair from './images/hairdressing.png'
import Tutor from './images/tutor.png'

const slideImages = [
    './images/fitness.png',
    '.images/hairdressing.png',
    './images/tutor.png'
]

const SlideShow = () => {
    return (
        <div className='landing-slide'>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <img src={Fitness} />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <img src={Hair} />
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <img src={Tutor} />
              </div>
            </div>
          </Slide>
        </div>
      );
}
 
export default SlideShow;