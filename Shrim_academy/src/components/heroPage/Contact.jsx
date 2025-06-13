
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
            <div className='contact-us'>
                <h2>About us </h2>
            </div>

        </section>
    );
}

export default ContactSection;