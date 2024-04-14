import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="introduction">
      <div className="background-image">
        <img src="heroimage.jpg" />
      </div>
      <div className="text">
        <h1>Scroll Animations</h1>
        <p>
          Scroll animation demos using different React libraries
        </p>
        <p><a className='link' href="https://github.com/miltil/scrolling">See this page on GitHub</a></p>
      </div>
    </section>
  );
};

export default Hero;
