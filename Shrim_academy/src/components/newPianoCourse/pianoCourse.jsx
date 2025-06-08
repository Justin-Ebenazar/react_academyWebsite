import style from './pianoCourse.module.css'
import ModelCanvas from '../3dmodel/modelCanvas'
import { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
function PianoCourse(){
    const mainRef = useRef(null);
    const sceneRef = useRef(null);
    const [progress,setProgress]=useState(0);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                onUpdate: (self) => {
                    setProgress(self.progress);
                }
            }
        }).to(sceneRef.current, {
            x:'-45vw',
            y: '5vh',
            ease : 'none'
        })
        .to(sceneRef.current, {
            x:'4vw',
            y: '8vh',
            ease : 'none'
        })

    }, []);

    return(
        <section ref={mainRef} className={style.pianoCourse}>
            <div ref={ sceneRef } className={style.modelContainer}>
                <ModelCanvas progress={progress} />
            </div>
            <div className={style.pianoCourseDiv1}>
                <h1>Your Journey of Piano<br/> Mastery Begins<br/> Here!</h1>
            </div>
            <div className={style.pianoCourseDiv2}>
                <h2>
                    Welcome to Shrim Music Academy, where the joy of piano comes alive! At Shrim , we are dedicated to sharing our passion for music and guiding you on your piano journey. We believe in nurturing each student's potential in a warm, personalized, and supportive environment.
                </h2>
            </div>
            <div className={style.pianoCourseDiv3}>
                <h2>
                    For students who wish to achieve recognized musical qualifications, we offer dedicated preparation for examinations. We follow the esteemed syllabi of:
                </h2>
            </div>
        </section>
    );
}

export default PianoCourse;