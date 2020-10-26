import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MultiCarousel = () => {
    return (
        <Carousel responsive={responsive}>
            <div className="mx-3">
                <img className="w-100" src={carousel1} alt=""/>
            </div>
            <div className="mx-3">
                <img className="w-100" src={carousel2} alt=""/>
            </div>
            <div className="mx-3">
                <img className="w-100" src={carousel3} alt=""/>
            </div>
            <div className="mx-3">
                <img className="w-100" src={carousel4} alt=""/>
            </div>
            <div className="mx-3">
                <img className="w-100" src={carousel5} alt=""/>
            </div>
        </Carousel>
    );
};

export default MultiCarousel;