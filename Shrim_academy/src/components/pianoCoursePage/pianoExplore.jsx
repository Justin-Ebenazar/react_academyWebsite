import './pianoExplore.css';
import { useState } from 'react';
import Styleform from '../formElements/styleForm'
import PianoImage from '../../assets/pianoCourse/pianoCourse.jpg'

function PianoExplore(){

    const [activeDiv, setactiveDiv]= useState('div1');

    return(
        <section className="piano-explore">
            {/* <Styleform/> */}
            <div className='sidepane'>
                <div className='image-section'>
                    <img src={PianoImage} alt="pianoimage"/>
                </div>
                <h2>Your Piano Mastery Journey Begins Here!</h2>
                <button className='form-open-piano'>Enroll </button>
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
                    <span className={activeDiv === 'div4' ? 'tab-options-selected' : 'tab-options'} 
                    onClick={() => setactiveDiv('div4')}>
                        Get started : Fee
                    </span>
                </div>
                <div className='contents'>
                    {activeDiv === 'div1' && (
                        <div className='div1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                        </div>
                    )}
                    {activeDiv ==='div2' && (
                        <div className='div2'>
                            The shimmering cascade of emerald light danced across the forgotten spire, hinting at narratives untold. Below, the gentle hum of ancient mechanisms stirred, a rhythmic counterpoint to the whispered secrets carried on the unseen currents. A lone, iridescent feather drifted past the observation deck, a fleeting testament to journeys both concluded and yet to begin.                        
                        </div>
                    )}
                    {activeDiv ==='div3' && (
                        <div className='div3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                        </div>
                    )}
                    {activeDiv ==='div4' && (
                        <div className='div4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                        </div>
                    )}
                </div>
            </div>
        </section>  
    );
}

export default PianoExplore;