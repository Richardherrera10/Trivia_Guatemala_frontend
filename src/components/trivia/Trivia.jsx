import {React, useState, useEffect, useContext} from 'react'
import styles from './Trivia.css'

import axios from '../../service/api'
import UserContext from '../../UserContext'
const TRIVIA_URL =  `/trivia/question/1`
const RESPONSE_URL =  `/trivia/response`

let numQuestions = 1
// const token  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzdlOTAyNy01MDFlLTQ2NDAtOTM1Yy0wNDEwNThiZGY2YzYiLCJqdGkiOiIzOWMzYzYxNTk4ZWUxZDFlOGYwOTUwOGE0MDNlN2U5NDQ0OTNiNDVjMDRmN2ViNzhjMTcxZDQ2ZWYyZDZmNzA1ZDBjNmMzNjhlYmU1OGI5MyIsImlhdCI6MTY2NjEzNjkzOSwibmJmIjoxNjY2MTM2OTM5LCJleHAiOjE2OTc2NzI5MzksInN1YiI6IjkiLCJzY29wZXMiOltdfQ.bTDcFTYKzipZjjQHU_BYyOa4wRVAMrSZHWiyhRww2yNffaQDyubnyrrMz8hFP0a6zP27Dit_dpntW1RWyjcA6taa5QKO3Tt79AtUSpRVvgZEgmcyqpmsg2R2stkogqrAz7tnIiIgd52TfzTSNI8rRXvlBLWPvWIPQXJjtlqJBN0nAWrgVMyj3t57bLyhEXYQmg8FugxlQ87FmmwKep427fFWbdmJD2R74BSPP6R4FA7xOLC2VFWhZo71FBmCALMWIa0K7J18eoiNkpp_R6CZ0UiyBDl8eDvyPtcl-D3QodAPuaqNAf8lODgetZzVkhXIZOAt1e2wYH8c8me2zG8AT34hm0NIIDMCt7iG5034ZAVwuAQfhn15xNoDQhmbeBbOepH_n_ogvG5E03SmpBWEQBwpbQk0-fAxYPpQjbIW014r5KYj7cLKI2fK8O-XZrhZL2aNYSF5tRI47WIfqqFZSf15w6bfY0eMZ5smIkUEbi5tAsVZNQ9SDttjBBdR_Oek3A7GeVssRyc9wM_L0qNMgaG4YWqapxnFtNWLavipIi9Remjn15osROjb24jQ8M-e4k85yKBrpynz0y_fZ6Txkob9Bmyw22xpURufl5Oe3PFoIsdxXnf174rytWlgVRQuetN7_Fv6roDKB9WSy0QYyTRjGdB-9ESUp7BRF5kvEOc"

export default function Trivia() {

 
  const { data } = useContext(UserContext)
  const { token } = useContext(UserContext)
 const [showResults, setShowResults] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [score, setScore] = useState(0);
const [arrayPreguntas, setArrayPreguntas] = useState([])
console.log('token del api es', token)
console.log('data en trivia', data)

useEffect(() => {
  while (numQuestions <= 10) {

    const getAllQs = async ()=> {
 
      const response = await axios.get(`/trivia/question/${numQuestions}`,
        { headers : {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`} 
        }
      )
     
      setArrayPreguntas(arrayPreguntas => [...arrayPreguntas, response.data])
      
    }
    getAllQs()
    ++numQuestions
   }
}, [])

useEffect(() => {
setCurrentQuestion(data.question)
}, [])



let arrayOpciones = []

arrayPreguntas.forEach(element=>{
  
  arrayOpciones.push({
    texto: element.pregunta,
    opciones: [
      element.respuesta_1, element.respuesta_2, element.respuesta_3
    ]
  })

})

console.log('arrayopciones', arrayOpciones)

 const optionClicked = (isCorrect) => {
   
   if (isCorrect) {
     setScore(score + 1);
     
  

   }

 
   if ((currentQuestion + 1 < arrayOpciones.length) && isCorrect) {

     setCurrentQuestion(currentQuestion + 1);
   } 
   if ((currentQuestion + 1 >= arrayOpciones.length)){
     setShowResults(true);
   }

   
   const getResponse = async() => {
    const response = await axios.post(RESPONSE_URL,
      JSON.stringify({isCorrect}), 
      { headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`} 
      }
      
  )
  console.log('api response de respuesta', response.data)
   }
   getResponse()
 };


 return (
  
   <>
   {(arrayOpciones.length === 10) ? (

    <div className="App">
    
     {/* 2. Current Score  */}
     <h2>Punteo: {score*10}%</h2>

     {/* 3. Show results or show the question game  */}
     {showResults ? (
       /* 4. Final Results */
       <div className="final-results">
         <h1>¡Felicidades!</h1>
         {/* <h2 >
           {score} out of {arrayOpciones.length} correct - (
           {(score / arrayOpciones.length) * 100}%)
         </h2> */}
       </div>
     ) : (
    
      
       <div className="question-card">
         {/* Current Question  */}
         <h2 className='question-number'>
           Pregunta: {currentQuestion + 1} de {arrayOpciones.length}
         </h2>
         <h3 className="question-text">{arrayOpciones[currentQuestion].texto }</h3>

         {/* List of possible answers  */}
         
         <ul>
           {arrayOpciones[currentQuestion].opciones.map((opcion) => {
            
             return (
              
               <li onClick={()=>optionClicked(opcion.is_correct)}>
                 {opcion.text}
               </li>
             );
           })}
         </ul>
       </div>
     )}
   </div> 
   ) : <h1> LOADING</h1> }
   </>
 );
}


