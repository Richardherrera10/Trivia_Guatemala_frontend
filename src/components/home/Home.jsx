
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

import moment from 'moment/moment';
import { useNavigate, Navigate } from "react-router-dom";

import styles from './Home.css'

import Male_happy from '../../avatars/male/Male_happy'
import Male_sad from '../../avatars/male/Male_sad'

import Female_happy from '../../avatars/female/Female_happy'
import Female_sad from '../../avatars/female/Female_sad'

import axios from '../../service/api'

export default function Home() {

   const [updatedDate, setUpdatedDate] = useState('')
   const navigate = useNavigate()
   const [pressBtn, setPressBtn] = useState(false)
   const [mood, setMood] = useState(false)
   useEffect(() => {
   const config = {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    axios.post("https://triviaguatemala.webmands.com/public/api/trivia/response",{isCorrect: 0}, config)
    .then(response => {
      console.log('response es date', response.data.updated_at)
      setUpdatedDate(response.data.updated_at)
   })
   }
   , [])
   
useEffect(() => {
   //localStorage.setItem('mood', 'triste')
   if (localStorage.getItem('mood') === null) {
      localStorage.setItem('mood', 'triste')
   }
   if (localStorage.getItem('mood') === 'feliz') {
      setMood(true)
   }
 console.log('local storage es', localStorage)
 
}, [])

    
   
   // console.log('este seria el token' + localStorage.getItem('token'));
   const navigateTrivia = () => {
      
      navigate('/trivia')
      if (localStorage.getItem('mood') === 'triste') {
         setMood(true)
         localStorage.setItem('mood', 'feliz')
         console.log('volvi feliz')
         console.log(localStorage)
      }
   }


   useEffect(() => {
      <Navigate to="/dashboard" replace={true} />
   }, [])
 
   return (
      <>
  
         {
            console.log('dif fechas en horas', moment().diff(updatedDate,'hours'))
         }
         {(localStorage.getItem('token') == null) ? (
               <Navigate to='/login'/>
            ) : (
               <>
                  {(localStorage.getItem('avatar') == '1') ? (
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
                           }}>
                        <ambientLight intensity={1.25} />
                        <ambientLight intensity={0.1} />
                        <directionalLight intensity={0.4} />
                        <Suspense fallback={null}>
                           {!pressBtn && !mood? <Male_sad position={[-1.5, -1, 0]} scale={[1.5,1.5,1.5]}/> : <Male_happy position={[-1.5, -1, 0]} scale={[1.5,1.5,1.5]}/>}
                            
                        </Suspense>
                        </Canvas>
                        <button onClick={navigateTrivia} className="button-77" id='btnJugar'>JUGAR</button>
                     </>
                  ) :  <>
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
                        <Female_sad position={[-1.5, -1, 0]} scale={[1.5, 1.5, 1.5]} />
                        {/* <Male_sad position={[-1.5, -1, 0]} scale={[1.5,1.5,1.5]}/>  */}
                     </Suspense>
                     </Canvas>
                        <button onClick={navigateTrivia} className="button-77" id='btnJugar'>JUGAR</button>
                     </>
                  }
               </>
            )}
      </>       
     );
}