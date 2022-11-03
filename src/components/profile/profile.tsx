import {useRef, useState, useEffect} from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import axios from '../../service/api';
import React from 'react';

export default function Profile() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState("");
  const [isCorrectInfo, setIsCorrectInfo] = useState(false)
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [nameFocus, setNameFocus] = useState(false);
  const userRef = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('nuevo nombre es', userName)
      const config = {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    const data = { name: userName};
      axios.put("https://triviaguatemala.webmands.com/public/api/updateDataUser", data, config)
        .then(response => {
            localStorage.setItem('user_name', response.data.user_name);
            console.log('local storage ahora es', localStorage)
            setSuccess(true)
          },
        )
        .catch(error=>{}
        );

  }
  const handleChange = (e) => {
    setUserName(e.target.value)
  }
 
   useEffect(() => {
    let nombre = localStorage.getItem('user_name')
   setUserName(String(nombre))
   setEmail(String(localStorage.getItem('email')))
 }, [])


  const [userName, setUserName] = useState('')


  return (
    <>
    {success ? ( <Navigate to='/'/>):
    (<>
         <div className="container vh-100">
             {error != null ? (
                <p className='text-center text-danger mb-0 font-weight-bold'>{error}</p>
                ) : (
                  <div>
                  </div>
                )
              }
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6  mw-400">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <form className="form-example text-center" onSubmit={handleSubmit} method="post">
                                <h1 className="mt-1 font-weight-bold text-center">Mi Perfil</h1>
                                <div className="form-group text-left">
                                    <label htmlFor="name" className="font-weight-bold">Nombre:</label>
                                    <input
                                        className="form-control form-control-sm name"
                                        type="text"
                                        id="text"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        defaultValue={userName}
                                        required
                                        onFocus={() => setNameFocus(true)}
                                        onBlur={() => setNameFocus(false)}
                                    />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="username" className="font-weight-bold">Correo electrónico:</label>
                                    <input
                                        className="form-control form-control-sm username"
                                        type="email"
                                        id="email"
                                        value={email}
                                        disabled
                                    />
                                </div>
                                <button type="submit" className="btn btn-customized">ACTUALIZAR NOMBRE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )}
       
       
    </>
  )
}

