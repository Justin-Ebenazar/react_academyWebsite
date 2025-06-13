import './pianoExplore.css';
import { useState } from 'react';
import Styleform from '../formElements/styleForm'
import PianoImage from '../../assets/pianoCourse/pianoCourse.jpg'

function PianoExplore(){

    const [activeDiv, setactiveDiv]= useState('div1');
    const [formStatus, setformStatus]= useState(false);
    
    return(
        <section className="piano-explore">
            {formStatus && (
                <Styleform closeForm={setformStatus} course="piano" />
            )}
            <div className='sidepane'>
                <div className='image-section'>
                    <img src={PianoImage} alt="pianoimage"/>
                </div>
                <h2>Your Piano Mastery Journey Begins Here!</h2>
                <button className='form-open-piano' onClick={() => setformStatus(true)}>Enroll </button>
            </div>
            <div className='maincontent'>
                <div className="slide-navbar">
                    <span className={activeDiv === 'div1' ? 'tab-options-selected' : 'tab-options'} 
                    onClick={() => setactiveDiv('div1')}>
                        Course overview
                    </span>
                    <span className={activeDiv === 'div2' ? 'tab-options-selected' : 'tab-options'} 
                    onClick={() => setactiveDiv('div2')}>
                        Styles & Syllabi
                    </span>
                    <span className={activeDiv === 'div3' ? 'tab-options-selected' : 'tab-options'} 
                    onClick={() => setactiveDiv('div3')}>
                        Course options
                    </span>
                </div>
                <div className='contents'>
                    {activeDiv === 'div1' && (
                        <div className='div1'>
                            <h2>Discover Your Melody at Shrim Academy</h2>
                            <p>Welcome to Shrim Music Academy, where the joy of piano comes alive! At Shrim , we are dedicated to sharing our passion for music and guiding you on your piano journey. We believe in nurturing each student's potential in a warm, personalized, and supportive environment.</p>
                            <br/>
                            <h2>Our approach</h2>
                            <p>At Shrim Music Academy, we pride ourselves on creating a friendly and encouraging atmosphere. At Shrim, we offer a unique blend of experience and personalized attention. We understand that every student learns differently, and we adapt our teaching methods to suit your individual pace and learning style, ensuring a fulfilling and enjoyable musical experience.</p>
                        </div>
                    )}
                    {activeDiv === 'div2' && (
                        <div className='div2'>
                            <h2>Exam preparation</h2>
                            <p> </p>
                            <br/>
                            <b>Trinity College London</b>
                            <br/>

                            <b>Associated Board of the Royal Schools of Music (ABRSM)</b>
                            <br/>

                            <p>We'll work closely with you to prepare for these exams, helping you build confidence and achieve your certification goals.</p>
                        </div>
                    )}
                    {activeDiv ==='div3' && (
                        <div className='div3'>
                            <h2>Choose Your Learning Style at Shrim Music Academy</h2>
                            <p>At Shrim Music Academy, we understand that every student has unique needs and preferences when it comes to learning music. That's why we offer a range of flexible course styles designed to fit your schedule, location, and learning comfort. All our styles are available in convenient 4-Class or 6-Class packages.</p>
                            
                        </div>
                    )}
                </div>
            </div>
        </section>  
    );
}

export default PianoExplore;