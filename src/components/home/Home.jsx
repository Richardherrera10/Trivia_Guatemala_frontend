
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Sad from '../../../public/Sad'

import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from 'react';
export default function Home() {
    
   const navigate = useNavigate()
   // console.log('este seria el token' + localStorage.getItem('token'));
   const navigateTrivia = () => {
      navigate('/trivia')
   }
   useEffect(() => {
      <Navigate to="/dashboard" replace={true} />
   }, [])
    
   return (
      <>
         {(localStorage.getItem('token') == null) ? (
               <Navigate to='/login'/>
            ) : (
               <div>
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
                  <button onClick={navigateTrivia} className="btn btn-customized button-77">JUGAR</button>
               </div>
            )}
      </>       
     );
}