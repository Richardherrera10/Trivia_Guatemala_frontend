import {React, useState, useEffect, useContext} from 'react'
import styles from './Trivia.css'
import axios from '../../service/api'
import UserContext from '../../UserContext'
import Swal from 'sweetalert2'

export default function Trivia() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [arrayPreguntas, setArrayPreguntas] = useState([])
  var [quest, setQuest] = useState([])

useEffect(() => {
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  };
  if(localStorage.getItem('userActualQuestion')){
    quest = localStorage.getItem('userActualQuestion');
    setQuest(quest);
  }else{
    quest = 1;
    setQuest(quest);
  }
  axios.get("https://triviaguatemala.webmands.com/public/api/trivia/question/"+quest, config)
  .then(response => {
      setArrayPreguntas(response.data);
      
    },
  )
  .catch(error=>{
      console.log(error);
    }
  );
}, [])

 const optionClicked = (isCorrect) => {
  if(isCorrect==0){
    Swal.fire({
      icon: 'error',
      title: 'Upss... Esta no es la respuesta correcta',
      confirmButtonText: 'Seguir Jugando',
      confirmButtonColor: "rgba(165,220,134,.9)",
      showDenyButton: true,
      denyButtonText: `Salir`,
    }).then((result) => {
      if (result.isDenied) {
        window.location.href = "/";
      }
    });
  }else if(isCorrect==1){
    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    const data = { isCorrect : 1};
    axios.post("https://triviaguatemala.webmands.com/public/api/trivia/response", data, config)
    .then(response => {
        localStorage.setItem('userActualQuestion', response.data.question);
        if(response.data.question == 6 || response.data.question == 11 || response.data.question == 16){
          localStorage.setItem('level', localStorage.getItem('level')+1);
        }
        Swal.fire({
          icon: 'success',
          title: '¡Respuesta correcta!',
          confirmButtonText: 'Seguir Jugando',
          confirmButtonColor: "rgba(165,220,134,.9)",
          showDenyButton: true,
          denyButtonText: `Salir`,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
          } else if (result.isDenied) {
            window.location.href = "/";
          }
        })
      },
    )
    .catch(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error, intenta nuevamente',
          footer: '<a className="btn btn-danger" href="/">Salir</a>'
        })
      }
    );
    
  }
 };

 return (  
   <>
   {(arrayPreguntas.pregunta != undefined) ? (
    <div className="App">
     {showResults ? (
       <div className="final-results">
         <h1>¡Felicidades!</h1>
       </div>
     ) : (  
      <div className="container">
        <div className='row justify-content-center'>
          <div className="col-sm-6 mt-5">
            <span className='mt-5'>Pregunta #{quest}</span>
            <h2 className='mb-5'>{arrayPreguntas.pregunta}</h2>
            <h4 className='btn btn-primary btn-sm d-block' onClick={()=> optionClicked(arrayPreguntas.respuesta_1.is_correct)}>{arrayPreguntas.respuesta_1.text}</h4>
            <h4 className='btn btn-primary btn-sm d-block' onClick={()=> optionClicked(arrayPreguntas.respuesta_2.is_correct)}>{arrayPreguntas.respuesta_2.text}</h4>
            <h4 className='btn btn-primary btn-sm d-block' onClick={()=> optionClicked(arrayPreguntas.respuesta_3.is_correct)}>{arrayPreguntas.respuesta_3.text}</h4>
          </div>
        </div>
      </div>    
     )}
   </div> 
   ) :
    <div className="container mt-5">
      <div className='row justify-content-center mt-5'>
      <svg className="pl" viewBox="0 0 64 64" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="grad-mask">
            <rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
          </mask>
        </defs>
        <circle className="pl__ring" cx="32" cy="32" r="26" fill="none" stroke="hsl(223,90%,55%)" strokeWidth="12" strokeDasharray="169.65 169.65" strokeDashoffset="-127.24" strokeLinecap="round" transform="rotate(135)" />
        <g fill="hsl(223,90%,55%)">
          <circle className="pl__ball1" cx="32" cy="45" r="6" transform="rotate(14)" />
          <circle className="pl__ball2" cx="32" cy="48" r="3" transform="rotate(-21)" />
        </g>
        <g mask="url(#grad-mask)">
          <circle className="pl__ring" cx="32" cy="32" r="26" fill="none" stroke="hsl(283,90%,55%)" strokeWidth="12" strokeDasharray="169.65 169.65" strokeDashoffset="-127.24" strokeLinecap="round" transform="rotate(135)" />
          <g fill="hsl(283,90%,55%)">
            <circle className="pl__ball1" cx="32" cy="45" r="6" transform="rotate(14)" />
            <circle className="pl__ball2" cx="32" cy="48" r="3" transform="rotate(-21)" />
          </g>
        </g>
      </svg> 
    </div>
    </div>
      }
   </>
 );
}


