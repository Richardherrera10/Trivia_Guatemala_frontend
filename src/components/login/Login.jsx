import {useState, useContext} from 'react'
import { Navigate } from "react-router-dom";
import axios from '../../service/api';

export default function Login() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState("");
  const [isCorrectInfo, setIsCorrectInfo] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, pwd, pwd);
    
    const data = { email:email, password: pwd, password_confirmation: pwd };
    axios.post("https://triviaguatemala.webmands.com/public/api/login", data)
        .then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_name', response.data.user_name);
            localStorage.setItem('question', response.data.question);
            if(response.data.question == 0){
              localStorage.setItem('userActualQuestion', 1);
            }else{
              localStorage.setItem('userActualQuestion', response.data.question);
            }
            localStorage.setItem('level', response.data.level);
            setIsCorrectInfo(true);
          },
        )
        .catch(error=>{
            setError("El correo o la contraseña son incorrectos");
          }
        );
  }
 
  return (
    <> 
    {!isCorrectInfo ? (
      <div className="container vh-100">    
          <a className="btn btn-customized float-button" href="/register">REGISTRARSE</a>
          {error != null ? (
            <p className='text-center text-danger mb-0 font-weight-bold'>{error}</p>
            ) : isLoading ? (
              <h2>Loading...</h2>
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
                              <h1 className="mt-1 font-weight-bold text-center">Ingresar</h1>
                              <div className="form-group text-left">
                                  <label htmlFor="username" className="font-weight-bold">Correo electrónico:</label>
                                  <input required type="email" className="form-control form-control-sm username" id="username" name="username" onChange={(e) => setEmail(e.target.value)}/>
                              </div>
                              <div className="form-group text-left">
                                  <label htmlFor="password" className="font-weight-bold">Contraseña:</label>
                                  <input required type="password" className="form-control form-control-sm password" id="password" name="password" onChange={(e) => setPwd(e.target.value)}/>
                              </div>
                              <button type="submit" className="btn btn-customized">INGRESAR</button>
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

