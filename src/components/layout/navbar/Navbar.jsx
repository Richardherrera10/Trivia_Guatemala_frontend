import {Component, useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.css'
import ProgressBar from '../../progress/ProgressBar';
import ProgressBarContainer from '../../container/ProgressBarContainer';

import React from 'react'
import UserContext from '../../../UserContext';


export default function Navbar() {
  
  const [value, setValue] = useState(0);
  const { loginName } = useContext(UserContext)
  const { data } = useContext(UserContext)
  const {addLevel} = useContext(UserContext)
  console.log('name deberia ser', loginName)
  console.log('info de niveles', data)

  
/*   useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;

        if (newValue == 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []); */


  return (     
        
      <nav class="navbar navbar-custom ">
      <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
          <span></span>
          </label>

        <ul class="menu__box">
          <li><a class="menu__item" href="#">Mi Perfil</a></li> 
          <li><a class="menu__item" href="#">Ranking Amigos</a></li>
          <li><a class="menu__item" href="#">Configuraciones</a></li>
        </ul>
      </div>
      {console.log('login name en la navbar', loginName)}
      <a class="navbar-brand">Bienvenido {loginName}</a> 
      
      <div className='progreso'>
      <p> Nivel {data.level + 1}</p>
      <ProgressBar color={"#ff7979"} width={"150px"} value={30} max={100} />
      <p> 30%</p>
      </div>
      
        
     
      
    </nav>
     
       
      
          
     

      

  )
}
/* 

class Navbar extends Component{
  constructor(props){
    super(props);
  }
  const [value, setValue] = useState(0)
  render(){
    return(
     
        
      <nav class="navbar navbar-custom ">
      <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
          <span></span>
          </label>

        <ul class="menu__box">
          <li><a class="menu__item" href="#">Home</a></li>
          <li><a class="menu__item" href="#">About</a></li>
          <li><a class="menu__item" href="#">Team</a></li>
          <li><a class="menu__item" href="#">Contact</a></li>
          <li><a class="menu__item" href="#">Twitter</a></li>
        </ul>
      </div>
      <a class="navbar-brand">Bienvenido Usuario</a>
      
      <ProgressBar value ={50} max = {100}/>
    </nav>
     
       
      
          
     

      
      
    );
  }

} */

     

{/* <div class="nav-wrapper">
    <ul class="list list-main">
        
          
     
        <li>
          
        </li>  
        
        <li>
          <a>Nombre Usuario</a>
        </li>
     
        
    </ul>
    <ul class="list list-secondary">
        <li><a >Log In</a></li>
        <li><a >Sign Up</a></li>
    </ul>
</div> */}
 {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

        <ul  class="navbar-nav">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Menu
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item">Link 1</a>
              <a class="dropdown-item" >Link 2</a>
              <a class="dropdown-item">Link 3</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Nombre Usuario</a>
          </li>

          <li id='nav-flex' class="nav-item">
            <a class="nav-link" href="#">Link 2</a>
          </li>

        </ul>
      </nav> */}
/*  <div className='container-navbar'> 
          <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">pcTech</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler4"
        aria-controls="myNavbarToggler4" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler4">
        <ul className="navbar-nav">
          <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Componentes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/keyboard'><div className="dropdown-item"> Teclados </div> </Link>
                  <Link to='/mouse'><div className="dropdown-item"> Ratones </div> </Link>
                  <Link to='/monitor'><div className="dropdown-item"> Monitores </div> </Link>
                  <Link to='/speaker'><div className="dropdown-item"> Speakers </div> </Link>
                  <Link to='/motherboard'><div className="dropdown-item"> Placas </div> </Link>
                  <Link to='/processor'><div className="dropdown-item"> Procesadores </div> </Link>
                  <div className="dropdown-divider"></div>
                    <Link to='/createComponent'><div className="dropdown-item" >Crear un componente</div></Link>
                  </div>
          </li>
            
          <li className="nav-item">
                 <Link to='/computer'><div className="nav-link" >Computer</div></Link> 
          </li>
          <li className="nav-item">
                 <Link to='/login'><div className="nav-link" ><button type="button" class="btn btn-warning">Login</button></div></Link> 
          </li>
        </ul>
    </div>
</nav>
      </div> */