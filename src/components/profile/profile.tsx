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
    console.log(email, pwd, pwd);
    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    const data = { name:name};
    axios.put("https://triviaguatemala.webmands.com/public/api/updateDataUser", data, config)
        .then(response => {
            localStorage.setItem('user_name', response.data.user_name);
            setIsCorrectInfo(true);
            window.location.reload();
          },
        )
        .catch(error=>{}
        );
  }

  let emailUser;
  if (!localStorage.getItem('email')) {
    emailUser = ""
  } else {
    emailUser = localStorage.getItem('email')
  }
  let useName;
  if (!localStorage.getItem('user_name')) {
    useName = ""
  } else {
    useName = localStorage.getItem('user_name')
  }

 
  return (
    <>
    {success ? (
         <Navigate to='/'/>
    ) : (
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
                                        onChange={(e) => setName(e.target.value)}
                                        value={useName}
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
                                        value={emailUser}
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
        )}
    </>
  )
}

