import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='container-navbar'> 
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
      </div>
      
    );
  }

}

export default Navbar;

