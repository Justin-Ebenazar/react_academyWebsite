import React,{useRef,useEffect} from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment,PerspectiveCamera,OrbitControls  } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./model.jsx"
gsap.registerPlugin(ScrollTrigger);

function ModelScene({progress}){
    const cameraRef = useRef(null);
    useFrame(()=>{
        cameraRef.current.lookAt(0,0,0);
     })
     useEffect(()=>{
        const positions=[[30,20,40],[-50,20,40],[0,5,40]];
        if(progress >=1){
            gsap.to(cameraRef.current.position, {
                x: 0,
                y: 5,
                z: 40,
                duration: 0.5,
                ease: 'none',
            });
        }
        else{
            const segments=1/2;

        const segmentIndex= Math.floor(progress / segments);
        // const segmentIndex= 0;
        const percentage=(progress%segments) / segments;
        console.log(progress,segments);
        const [startX,startY,startZ]= positions[segmentIndex];
        const [endX,endY,endZ]= positions[segmentIndex+1];

        const x=startX + (endX - startX) * percentage;
        const y=startY + (endY - startY) * percentage;  
        const z=startZ + (endZ - startZ) * percentage;

        gsap.to(cameraRef.current.position, {
            x: x,
            y: y,
            z: z,
            duration: 0.5,
            ease: 'power1.InOut',
        });
        }
     },[progress])
    return(
        <>
            <axesHelper args={[50]}/>
            <PerspectiveCamera ref={cameraRef} fov= {45} near={1} far={10000} makeDefault  position={[30, 20, 40]}/>
            <Environment preset="city" />
            <Model/>
        </>
    );
}

export default ModelScene;