
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Sad from '../../../public/Sad'
import styles from './Home.css'

import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from 'react';
export default function Home() {
    const navigate = useNavigate()

    const navigateTrivia = () => {
        navigate('/trivia')
    }
    useEffect(() => {
        <Navigate to="/dashboard" replace={true} />
    }, [])
    
    return (
        <>
            <Canvas
           camera={{ position: [2, 0, 15], fov: 15 }}
           style={{
            
              backgroundImage: 'url("../../../public/light_bk.jpg")',
            backgroundSize: '100%',
              width: '100vw',
              height: '100vh',
              zIndex: -1,
              position: 'relative',
              
           }}
        >
           <ambientLight intensity={1.25} />
           <ambientLight intensity={0.1} />
           <directionalLight intensity={0.4} />
           <Suspense fallback={null}>
              <Sad position={[-1.5, -1, 0]} scale={[1.5,1.5,1.5]}/> 
           </Suspense>
           
        </Canvas>
        <button onClick={navigateTrivia} class="button-77" role="button" navi>JUGAR</button>
        </>
        
     );
}