import {useRef, useState, useEffect} from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import styles from './Register.css'
import axios from '../../service/api';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {

    const userRef = useRef();
    const errRef = useRef();
    const [error, setError] = useState("");
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect (()=> {
        userRef.current.focus()
    },[])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name,pwd, email)
        const data = { name: name, email:email, avatar: avatar, password: pwd, password_confirmation: pwd };
        axios.post("https://triviaguatemala.webmands.com/public/api/register", data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_name', response.data.user_name);
                localStorage.setItem('question', response.data.question);
                localStorage.setItem('avatar', response.data.avatar);
                localStorage.setItem('userActualQuestion', 1);
                localStorage.setItem('level', 0);
                setSuccess(true);
            })
            .catch(error=>{
                // console.log(error.request.response);
            setError("Ocurrio un error")
            });
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
            <a className="btn btn-customized float-button" href="/login">INGRESAR</a>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6  mw-400">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <form className="form-example text-center" onSubmit={handleSubmit} method="post">
                                <h1 className="mt-1 font-weight-bold text-center">Registrarse</h1>
                                <div className="form-group text-left">
                                    <label htmlFor="name" className="font-weight-bold">Nombre:</label>
                                    <input
                                        className="form-control form-control-sm name"
                                        type="text"
                                        id="text"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
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
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="username" className="font-weight-bold">Avatar:</label>
                                    <select 
                                        className="form-control form-control-sm avatar"
                                        id="avatar"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setAvatar(e.target.value)}
                                        value={avatar}
                                        required
                                        onFocus={() => setAvatarFocus(true)}
                                        onBlur={() => setAvatarFocus(false)}
                                        >
                                        <option value="">Seleccione una opcion</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                    </select>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="password" className="font-weight-bold">
                                        Contraseña:
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />    
                                    </label>
                                    <input
                                        className="form-control form-control-sm password" 
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        8 a 24 caracteres.<br />
                                        La contraseña debe tener mayúsculas, minúsculas, numeros y un simbolo especial.<br />
                                        Carácteres sugeridos: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                    </p>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="password" className="font-weight-bold">
                                        Confirmar contraseña:
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        className="form-control form-control-sm password"
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Las contraseñas no coinciden.
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-customized">CREAR CUENTA</button>
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

