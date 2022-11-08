import React from 'react';
import {useState, useContext} from 'react'
import { Navigate } from "react-router-dom";
import axios from '../../service/api';

export default function Admin() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState("");
  const [isCorrectInfo, setIsCorrectInfo] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(email, pwd, pwd);
    // const data = { email:email, password: pwd, password_confirmation: pwd };
    // axios.post("https://triviaguatemala.webmands.com/public/api/login", data)
    //     .then(response => {
    //         console.log(response)
    //         localStorage.setItem('token', response.data.token);
    //         localStorage.setItem('user_name', response.data.user_name);
    //         localStorage.setItem('question', response.data.question);
    //         localStorage.setItem('email', response.data.email);
    //         localStorage.setItem('avatar', response.data.avatar);
    //         localStorage.setItem('level', response.data.level);
    //         setIsCorrectInfo(true);
    //       },
    //     )
    //     .catch(error=>{
    //         setError("El correo o la contraseña son incorrectos");
    //       }
    //     );
  }
 
  return (
    <> 
    {!isCorrectInfo ? (
      <div className="container vh-100">    
          {/* <a className="btn btn-customized float-button" href="/register">ADMINISTRADOR</a> */}
          <div className="row h-100 justify-content-center align-items-center">
              <div className="col-10 col-md-8 col-lg-6  mw-400">
                  <div className="card shadow p-3 mb-5 bg-white rounded">
                      <div className="card-body">
                          <form className="form-example text-center" onSubmit={handleSubmit} method="post">
                              <h1 className="mt-1 font-weight-bold text-center">Administrador</h1>
                              <div className="form-group text-left">
                                  <label htmlFor="username" className="font-weight-bold">Web Service Preguntas:</label>
                                  <input required type="email" className="form-control form-control-sm username" id="username" name="username" onChange={(e) => setEmail(e.target.value)}/>
                              </div>
                              <button type="submit" className="btn btn-customized">GUARDAR</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    ):(
      <Navigate to='/'/>
    )}
    </>
  )
}

