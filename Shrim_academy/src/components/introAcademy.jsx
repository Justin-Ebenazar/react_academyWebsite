import './introAcademy.css'; // Import CSS for styling
import pianoBackground from '../assets/playing_piano_background.jpg'; // Adjust the path if necessary

const IntroAcademy = () => {
    return (
        <div className="intro-academy" >
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
                    <button className="enroll-button">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default IntroAcademy;