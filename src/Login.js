import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render(){
    return (
      <div id="login">
        <div className="loginForm">
          <div className="logNav">
            <h4 className="logNavBtn" style={{opacity: '0.5'}}><Link to="/signup">SIGN UP</Link></h4>
            <h4 style={{textDecoration: 'underline'}}>LOGIN</h4>
          </div>
          <div className="ig">
            <img className="email" src="/assets/ic-email.png" />
            <input className="form-control" type="email" placeholder="Email" autoComplete="off"/>
          </div>
          <div className="ig">
            <img className="password" src="/assets/ic-password.png"/>
            <input className="form-control" type="password" placeholder="Password" autoComplete="new-password"/>
          <button className="btn">LOGIN</button>
          </div>

        </div>

      </div>
    )
  }
}

export default Login;