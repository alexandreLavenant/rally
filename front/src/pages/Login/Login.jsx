import React from 'react';
import { useEffect } from 'react';
import './Login.scss';


const Login = () => {

  useEffect (() => {
    document.title = 'Rallye App - Login'
}, [])

    return (
      <div className="background">
        <div className="login-content">
          <h1 className="login-title">Login</h1>
          <input type="password" placeholder="Password"></input>
          <button type="button">Connexion</button>
        </div>
      </div>
    );
  }
  
  export default Login;