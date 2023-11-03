import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
import Ww from "./ww.png";
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState({
    user_err: '',
    pass_err: '',
    message: '',
    status: ''
  })
  useEffect(() => {
  }, [error]);

  const sendDataToPHP = async () => {

    try {
      let data = {
        username,
        password
      };
      let response = await fetch('http://localhost/gamezon/GameZon/grupa/selects/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      response = await response.json();
      console.log(response);
      if(response.status === 403) {
        setError(response)
      }
      if (response.status === 200) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.username)
        navigate('/');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="main">
      <div className="login">
        <div className="login-form">
          <div className="login-label">Login</div>
          <div className="login-inputs">
            <div className="user-input">
              <label htmlFor="user" className="user-label">
                Username
              </label>
              <input
                  type="text"
                  className="username-input"
                  value = {username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <span className="error">{error.user_err}</span>
            </div>
            <div className="pass-input">
              <label htmlFor="pass" className="pass-label">
                Password
              </label>
              <input
                  type="password"
                  className="password-input"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
              />
              <span className="error">{error.pass_err}</span>
            </div>
          </div>
          <div className="sign-in-button">
            <button
                className="login-button"
                onClick = {sendDataToPHP}> Sign in
            </button>
          </div>
          <div className="register-page">
            <div className="register-text">Create an account here</div>
            <div className="sign-up-text">
              <Link to = "/Register">Sign up</Link>
            </div>
          </div>
          <div className="forgot-page">
            <div className="forgot-text">Forgot password?</div>
            <div className="click-here-text">
              <Link to = "/ForgotPassword">
                Click here!
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Ww} alt="Ww" />
        </div>
      </div>
    </div>
  );
}

export default Login;
