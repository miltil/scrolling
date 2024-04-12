import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <TrackVisibility once offset={100}>
      {({ isVisible }) => (
        <section className={isVisible ? 'content animate__animated animate__fadeInRight' : 'hidden'}>
            <div>
              <h2>What Our Customers Say</h2>
              <div className='testimonial-container'>
              <div className="testimonial">
                <img className='testimonial-image' src="testimonial1.jpg" alt="Testimonial 1" />
                <p>"This product changed everything for me. Highly recommended!"</p>
              </div>
              <div className="testimonial">
                <img className='testimonial-image' src="testimonial2.jpg" alt="Testimonial 2" />
                <p>"I couldn't believe the results. Amazing product!"</p>
              </div>
              </div>
            </div>
        </section>
      )}
    </TrackVisibility>
  );
};

export default Testimonials;
