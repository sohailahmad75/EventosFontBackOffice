import React from 'react';
import {Link} from "react-router-dom";
const Login = () => {
  return (

    <div className="container-fluid login-container">
      <div className="row">
        <div className="offset-md-3 col-md-3 login-form-1 col-12 d-flex justify-content-end flex-column pb-5 mr-5">
          <h1 className='display-1 pb-2 pb-md-5'>Login</h1>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div><span className="text-muted">Esqueceu a palavra-passe?</span><span className='font-weight-bold'> Recupere-a.</span></div>
            <Link to="/register" className='btn btn-secondary theme-button mt-3'>
              Iniciar sessão
            </Link>
          </form>
        </div>
        <div className="col-md-3 col-12 login-form-2 d-flex justify-content-end flex-column pb-5 pl-3 pl-md-5">
          <div><span className="text-muted">Não tem conta?</span><span className='font-weight-bold'> Crie uma.</span></div>
          <Link to="/register" className='btn btn-secondary theme-button mt-3'>
            Registars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
