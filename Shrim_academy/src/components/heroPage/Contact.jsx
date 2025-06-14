
// import React, { forwardRef } from 'react';
import './ContactSection.css'; // Make sure to keep your CSS file

function ContactSection() {
    return (
        <section id="section-about" className="contact-section">
            <div className='contact-us'>
                <h2>Contact us </h2>
                <a href="tel:+917338799629" className="phone">
                    7338799629
                </a>
                <a href="mailto:ebenazarmusic@gmail.com" className="text-xl font-bold text-white hover:text-green-300 transition duration-300">
                    ebenazarmusic@gmail.com
                </a>
            </div>
            <div className='contact-us' >
                <h2>About us </h2>
                <p style={{marginLeft: '3vw',padding: '1vw'}}>S. Ebenazar, the visionary founder of Shrim Music Academy, brings over 25 years of extensive experience from the dynamic music industry. A highly skilled educator, he has a proven track record of preparing students for examinations and instilling a deep love for music. Beyond teaching, Ebenazar is also a distinguished film music director, having composed evocative scores. His passion for weaving narrative through sound profoundly shapes his holistic philosophy for music education, driving the academy's mission to provide high-quality, accessible music education and empower every aspiring musician to unlock their unique potential.</p>
            </div>

        </section>
    );
}

export default ContactSection;