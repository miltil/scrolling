import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="background-image">
        <img src="heroimage.jpg" alt="Introduction Image" />
      </div>
      <div className="text">
        <h1>Scroll Animations</h1>
        <p>
          Did you come to see some scroll animations? You've come to the right place.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
