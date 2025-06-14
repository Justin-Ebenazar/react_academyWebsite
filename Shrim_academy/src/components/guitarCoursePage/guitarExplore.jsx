import style from './guitarExplore.module.css';
import { useState } from 'react';
import Styleform from '../formElements/styleForm';
import GuitarImage from '../../assets/guitarCourse/guitarCourse.jpg';

function GuitarExplore() {
    const [activeDiv, setactiveDiv] = useState('div1');
    const [formStatus, setformStatus]= useState(false);

    return (
        <section className={style['piano-explore']}>
            {formStatus && (
                <Styleform closeForm={setformStatus} course="guitar" />
             )}
            <div className={style.sidepane}>
                <div className={style['image-section']}>
                    <img src={GuitarImage} alt="pianoimage" />
                </div>
                <h2 className={style['sidepane-h2']}>Embark your Guitar learning journey with Shrim!</h2>
                <button className={style['form-open-piano']} onClick={() => setformStatus(true)}>Enroll</button>
            </div>
            <div className={style.maincontent}>
                <div className={style['slide-navbar']}>
                    <span
                        className={activeDiv === 'div1' ? style['tab-options-selected'] : style['tab-options']}
                        onClick={() => setactiveDiv('div1')}
                    >
                        Course overview
                    </span>
                    <span
                        className={activeDiv === 'div2' ? style['tab-options-selected'] : style['tab-options']}
                        onClick={() => setactiveDiv('div2')}
                    >
                        Styles & Syllabi
                    </span>
                    <span
                        className={activeDiv === 'div3' ? style['tab-options-selected'] : style['tab-options']}
                        onClick={() => setactiveDiv('div3')}
                    >
                        Course options
                    </span>
                </div>
                <div className={style.contents}>
                    {activeDiv === 'div1' && (
                        <div className={style.div1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore nulla accusantium eligendi perspiciatis quae incidunt alias dicta, est, laborum optio nostrum vel omnis esse? Porro accusamus veritatis soluta maiores!   
                        </div>
                    )}
                    {activeDiv === 'div2' && (
                        <div className={style.div2}>
                            The shimmering cascade of emerald light danced across the forgotten spire, hinting at narratives untold. Below, the gentle hum of ancient mechanisms stirred, a rhythmic counterpoint to the whispered secrets carried on the unseen currents. A lone, iridescent feather drifted past the observation deck, a fleeting testament to journeys both concluded and yet to begin.                        
                        </div>
                    )}
                    {activeDiv === 'div3' && (
                        <div className={style.div3}>
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

export default GuitarExplore;