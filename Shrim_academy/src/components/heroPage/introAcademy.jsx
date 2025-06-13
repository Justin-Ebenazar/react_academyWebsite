import './introAcademy.css'; // Import CSS for styling
import pianoBackground from '../../assets/playing_piano_background.jpg'; // Adjust the path if necessary
import { HashLink } from 'react-router-hash-link';

const IntroAcademy = () => {
    return (
        <div id='section-home' className="intro-academy" >
            <img src={pianoBackground} className="introImage" alt="Piano Background" />
            <div className="overlay">
                <div className="intro-content">
                    <h1>Unleash Your Musical Potential</h1>
                    <h2>Shrim Music Academy</h2>
                    <p>
                        Discover the joy of music with our expert instructors and personalized lessons.
                        Whether you're a beginner or an advanced musician, we have something for everyone.
                        Join us to explore your passion for music and unlock your true potential.
                        At Shrim Music Academy, we believe in nurturing talent and inspiring creativity.
                    </p>
                    <HashLink to="/#section-courses" smooth className='nav-link'>
                        <button style={{backgroundColor: 'rgb(0, 185, 209)', color: 'white'}}>Explore Courses</button>                    
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default IntroAcademy;