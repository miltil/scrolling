import React from 'react';
import TrackVisibility from 'react-on-screen';
import "animate.css/animate.min.css";
import './Tracking.css';

const Tracking = () => {
  return (
    <div className='content'>
      <h2>Track Visibility</h2>
      <p>This section was created with <a href='https://www.npmjs.com/package/react-on-screen'>TrackVisibility</a>, a library that tracks if a component is partially or fully visible on the screen.</p>
      <div className='sky'>
        <TrackVisibility offset={500}>
          {({ isVisible }) => (
            <>
              <img className={isVisible ? 'moon content animate__animated animate__fadeInLeft' : 'hidden'} src="moon.png" />
              <img className={isVisible ? 'stars content animate__animated animate__zoomIn' : 'hidden'} src="stars.png" />
            </>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Tracking;

