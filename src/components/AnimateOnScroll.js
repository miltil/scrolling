import ScrollAnimation from 'react-animate-on-scroll';
import './AnimateOnScroll.css';

const AnimateOnScroll = () => {
    return (
        <div className="content">
            <h2>React Animate on Scroll</h2>
            <p><a href='https://www.npmjs.com/package/react-animate-on-scroll'>Animate on Scroll</a> is a library that provides an easy animation trigger when an element is scrolled into view, with many different configurations.</p>
            <div className='space-container'>
                <ScrollAnimation delay={500} animateIn="fadeInUp">
                    <img className='spaceship' src="spaceship.png" />
                </ScrollAnimation>
                <ScrollAnimation delay={500} initiallyVisible={true} animateIn="bounce" duration={4}>
                    <img className='astronaut' src="astronaut.png" />
                </ScrollAnimation>
            </div>
        </div>
    );
};
  
export default AnimateOnScroll;