import './courses.css';
import pianoCourse from '../../assets/piano_course.jpg';
import guitarCourse from '../../assets/guitarCourse.jpg';
import keyboardCourse from '../../assets/electronickeyboardCourse.jpg';
import trinityLogo from '../../assets/trinityLogo.png';
import abrsmLogo from '../../assets/abrsmLogo.png';
import pianoLogo from '../../assets/pianoLogo.png';
import Form from '../formElements/styleForm';
import { Link } from 'react-router-dom';

function Courses() {
return (
                    <div id="section-courses">
                            <div className="courses-piano">
                                        {/* <Form/> */}
                                    <div className="piano-classes-image">
                                            <img src={pianoCourse} alt="piano" />
                                    </div>
                                    <div className="piano-classes-content">
                                                    <h1>Unlock Your Musical Journey</h1><h2> with Piano at Shrim</h2>
                                                    <p>
                                                            At Shrim Music Academy, our comprehensive piano lessons provide a strong foundation for aspiring musicians of all ages. We start with basic piano techniques, music theory fundamentals, and ear training to build a solid understanding of music.
                                                    </p>
                                                    <div className="syllabiLogo">
                                                            <img src={trinityLogo} alt="Trinity College Logo" style={{ height: '30%' }} />
                                                            <img src={abrsmLogo} alt="ABRSM Logo" />
                                                            <img src={pianoLogo} alt="Piano Logo" />
                                                    </div>
                                                    <p>
                                                            For students looking to achieve recognized musical qualifications, we offer dedicated preparation for examinations following the esteemed syllabi of Trinity College London and the Associated Board of the Royal Schools of Music (ABRSM).
                                                    </p>
                                                    <div className="enroll-button-container">
                                                        <Link to='pianoCourse'>
                                                            <button className="enroll-button-piano">Enroll for Piano Class</button>
                                                        </Link>
                                                    </div>
                                    </div>
                            </div>
                            <div className="courses-guitar">
                                <div className="guitar-classes-section" style={{backgroundImage: `url(${guitarCourse})`}}>
                                    <div className="guitar-classes-content">
                                                    <h1>Your Guitar Journey at Shrim</h1>
                                                    <p>
                                                            Shrim Music Academy, offers amazing carnatic based music classes for you !
                                                    </p>
                                                    <p>
                                                            Embark on your musical journey with us! Whether you're a student <br/>aiming for musical excellence or an adult looking to unwind with<br/> your favorite tunes, we have the perfect guitar program for you.                                                    </p>
                                                    <div className="enroll-button-container">
                                                        <Link to='guitarCourse'>
                                                            <button className="enroll-button-guitar">Enroll for guitar class</button>
                                                        </Link>
                                                    </div>
                                    </div>
                                </div>
                            </div>
                                <div className="courses-keyboard">
                                    <div className="keyboard-classes-content">
                                                    <h1>Unlock Your Musical Journey</h1><h2> with Piano at Shrim</h2>
                                                    <p>
                                                            At Shrim Music Academy, our comprehensive piano lessons provide a strong foundation for aspiring musicians of all ages. We start with basic piano techniques, music theory fundamentals, and ear training to build a solid understanding of music.
                                                    </p>
                                                    <div className="syllabiLogo">
                                                            <img src={trinityLogo} alt="Trinity College Logo" style={{ height: '30%' }} />
                                                            <img src={abrsmLogo} alt="ABRSM Logo" />
                                                            <img src={pianoLogo} alt="Piano Logo" />
                                                    </div>
                                                    <p>
                                                            For students looking to achieve recognized musical qualifications, we offer dedicated preparation for examinations following the esteemed syllabi of Trinity College London and the Associated Board of the Royal Schools of Music (ABRSM).
                                                    </p>
                                                    <div className="enroll-button-container">
                                                        <Link to='keyboardCourse'>
                                                            <button className="enroll-button-keyboard">Enroll for keyboard Class</button>
                                                        </Link>
                                                    </div>
                                    </div>
                                    <div className="keyboard-classes-image">
                                            <img src={keyboardCourse} alt="electronicKeyboard" />
                                    </div>
                                </div>
                    </div>
);
}

export default Courses;