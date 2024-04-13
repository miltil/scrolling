import  { ScrollRotate } from 'react-scroll-rotate';
import './ScrollRotateGears.css';

const ScrollRotateGears = () => {
    return (
        <div className='content'>
            <h2>React Scroll Rotate</h2>
            <p><a href='https://giladk.github.io/react-scroll-rotate/'>React Scroll Rotate</a> is a library that rotates an image in time with a user's scroll.</p>
            <div className="gear-section">
                <div className="overlay-image">
                    <img src="spiral.png" />
                </div>
                <div className="spin-container">
                    <div className='left-gear'>
                        <ScrollRotate method={"perc"} loops={4} from={359} to={1}><img className="spinning-gears" src="gear1.png" /></ScrollRotate>
                    </div>
                    <div className='top-gear'>
                        <ScrollRotate method={"perc"} loops={2}><img className="spinning-gears" src="gear2.png" /></ScrollRotate>
                    </div>
                    <div className='right-gear'>
                        <ScrollRotate method={"perc"} loops={2}><img className="spinning-gears" src="gear2.png" /></ScrollRotate>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default ScrollRotateGears;