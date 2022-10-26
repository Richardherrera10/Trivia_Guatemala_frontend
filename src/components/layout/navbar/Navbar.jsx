import {Component, useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.css'
import ProgressBar from '../../progress/ProgressBar';
import ProgressBarContainer from '../../container/ProgressBarContainer';
import { Navigate } from "react-router-dom";
import React from 'react'
import UserContext from '../../../UserContext';


export default function Navbar() {
  const [isCorrectInfo, setIsCorrectInfo] = useState(false)
  const { loginName } = useContext(UserContext)
  const { data } = useContext(UserContext)
  const logout = async (e) => {
    e.preventDefault()    
    setIsCorrectInfo(true);
    localStorage.removeItem('token');
    localStorage.removeItem('user_name');
    localStorage.removeItem('question');
    localStorage.removeItem('level');
    localStorage.removeItem('userActualQuestion');
}



  return (
    <>
    {!isCorrectInfo ? (
      <nav className="navbar navbar-custom">
        <a className="navbar-brand"><strong>Bienvenido {localStorage.getItem('user_name')}</strong></a> 
        <div className='progreso'>
          <div>
            <div>
              <ProgressBar color={"#FF7A00"}  value={30} max={100} />
            </div>
            <div className='flexProgressBar'>
              <div>
                <span>Nivel {localStorage.getItem('level')}</span>
              </div>
              <div>
                <span>30%</span>
              </div>
            </div>
          </div>
          <div className="btn-group dropleft ml-3">
            <span type="button" className="menu-user" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
            <div className="dropdown-menu">     
            <a className="dropdown-item" href="/profile">Mi Peril</a>
              <a className="dropdown-item" onClick={logout} href="#">Salir</a>
            </div>
          </div>
        </div>
      </nav>):(
        <Navigate to='/login'/>
      )}
    </>
  )
}
