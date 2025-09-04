import './pianoExplore.css';
import { useState } from 'react';
import Styleform from '../formElements/styleForm'
import PianoImage from '../../assets/pianoCourse/pianoCourse.jpg'
import trinityLogo from '../../assets/trinityLogo.png';
import abrsmLogo from '../../assets/abrsmLogo.png';


function PianoExplore() {

    const [activeDiv, setactiveDiv] = useState('div1');
    const [formStatus, setformStatus] = useState(false);

    return (
        <section className="piano-explore" style={{backgroundImage: `url(${PianoImage})`, backgroundSize: '600px', backgroundPosition: 'left 250px bottom 80px',backgroundRepeat:'no-repeat'}}>
            {formStatus && (
                <Styleform closeForm={setformStatus} course="piano" />
            )}
            <div className='piano-explore-overlay'>
            <div className='sidepane' >
                {/* <div className='image-section'>
                    <img src={PianoImage} alt="pianoimage" />
                </div> */}
                <h1 style={{marginTop: "18%",marginLeft: "5%",color: "#54ACBF"}}>Your Piano Mastery Journey Begins<br></br>Here!</h1>
            </div>
            <div className='enroll-overlay'>
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
                            <br />
                            <h2>Our approach</h2>
                            <p>At Shrim Music Academy, we pride ourselves on creating a friendly and encouraging atmosphere. At Shrim, we offer a unique blend of experience and personalized attention. We understand that every student learns differently, and we adapt our teaching methods to suit your individual pace and learning style, ensuring a fulfilling and enjoyable musical experience.</p>
                        </div>
                    )}
                    {activeDiv === 'div2' && (
                        <div className='div2'>
                            <h2>Exam preparation</h2>
                            <p> </p>
                            <br />
                            <b>Trinity College London</b>
                            <br />
                            {/* <div style={{ height: '10%', display: 'flex' }}>
                                <img src={trinityLogo} alt="Trinity College Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                            </div> */}
                            <b>Associated Board of the Royal Schools of Music (ABRSM)</b>
                            <br />
                            {/* <div style={{ height: '20%', display: 'flex' }}>
                                <img src={abrsmLogo} alt="ABRSM Logo" />
                            </div> */}
                            <p>We'll work closely with you to prepare for these exams, helping you build confidence and achieve your certification goals.</p>
                        </div>
                    )}
                    {activeDiv === 'div3' && (
                        <div className='div3'>
                            <h2>Choose Your Learning Style at Shrim Music Academy</h2>
                            <p>At Shrim Music Academy, we understand that every student has unique needs and preferences when it comes to learning music. That's why we offer a range of flexible course styles designed to fit your schedule, location, and learning comfort. All our styles are available in convenient 4-Class or 6-Class packages as below</p>
                            <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "#3498db", color: "white", padding: "10px", textAlign: "left" }}>Course Type</th>
                                        <th style={{ backgroundColor: "#3498db", color: "white", padding: "10px", textAlign: "left" }}>Classes Per Month</th>
                                        <th style={{ backgroundColor: "#3498db", color: "white", padding: "10px", textAlign: "left" }}>Learning Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Online</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>4</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Combined</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Online</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>6</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Individual</td>
                                    </tr>
                                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Offline</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>4</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Combined</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Offline</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>6</td>
                                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Individual</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </section>
    );
}

export default PianoExplore;