import { useFrame, useThree, Canvas } from '@react-three/fiber';
import ModelScene from './3scene';

function ModelCanvas({progress}){    
    
    return (
            <Canvas style={{ width: '100%', height: '100%' }}>
                <ModelScene progress={progress}/>
            </Canvas>
    );
}

export default ModelCanvas;