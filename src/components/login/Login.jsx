import {useState, useContext} from 'react'
import styles from './login.css'
import axios from '../../service/api';
import { useNavigate } from "react-router-dom";
import HomeContainer from '../container/HomeContainer';
import Navbar from '../layout/navbar/Navbar';
const LOGIN_URL = '/login'
import Layout from '../layout/Layout';
import {Route, Routes, useParams} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import UserContext from '../../UserContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [isCorrectInfo, setIsCorrectInfo] = useState(false)
  
  const navigate = useNavigate()

  const  { apiResponse }= useContext(UserContext)


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, pwd, pwdConfirm)

    console.log('login axios')
    apiResponse(email, pwd, pwdConfirm)
    /* try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email, password: pwd, password_confirmation: pwdConfirm}), 
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: false
        }
    )
    console.log('si inicie')
    setIsCorrectInfo(true)
    
    console.log(response.data.user_name)
    setName(response.data.user_name)
    

    } catch (error) {
      console.log('no inicie')
      console.log(error)
    } 
    setName(email)
    */
    setIsCorrectInfo(true)
    
  }
 
  return (
    <>
    
{!isCorrectInfo ? (<div class="login-block">
  <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <input type="text"  placeholder="email" id="username" onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" id="password" onChange={(e) => setPwd(e.target.value)}/>
    <input type="password" placeholder="Confirm Password" id="password confirmation" onChange={(e) => setPwdConfirm(e.target.value)}/>
    <button >Iniciar Sesión</button>
  </form>
    
</div>) : (
    
    
      <Navigate to='/dashboard'/>
          
        
      
       
    
    
  )}

    </>
  )
}

