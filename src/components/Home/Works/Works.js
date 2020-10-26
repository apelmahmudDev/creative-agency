import React from 'react';
import './Works.css';
import MultiCarousel from '../MultiCarousel/MultiCarousel';

const Works = () => {
    return (
        <section className="works-area">
           <div className="container text-center">
                <h2 className="text-white mb-5">Here are some of 
                <span className="text-success"> our works</span></h2>
                <MultiCarousel></MultiCarousel>
           </div>
        </section>
    );
};

export default Works;