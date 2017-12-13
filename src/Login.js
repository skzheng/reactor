import React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props),
    this.state ={
      email: '',
      password: ''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  handleLogin(){
    if(this.state.email && this.state.password){
      axios.post('/login', {
        email : this.state.email,
        password: this.state.password
      })
      .then(res => {
        if(res.data.statusCode === 404 || res.data.statusCode === 401){
          swal('Invalid email or password', '' , 'error')
        } else {
          swal('Logged In','', 'success')
          console.log("Successfully logged in, data => ", res.data);
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.log("Error subscribing ", error.response);
      })
    } else {
      swal('Error', 'Please fill out all fields!','error');
    }
  }

  render(){
    return (
      <div id="login">
        <div className="loginForm">
          <div className="logNav">
            <h4 className="logNavBtn" style={{opacity: '0.2'}}><Link to="/signup">SIGN UP</Link></h4>
            <h4 style={{textDecoration: 'underline'}}>LOGIN</h4>
          </div>
          <div className="ig">
            <img className="email" src="/assets/ic-email.png" />
            <input className="form-control" type="email" placeholder="Email" autoComplete="off"  onInput={this.handleEmail}/>
          </div>
          <div className="ig">
            <img className="password" src="/assets/ic-password.png"/>
            <input className="form-control" type="password" placeholder="Password" autoComplete="new-password" onInput={this.handlePassword}/>
          <button className="btn" onClick={this.handleLogin}>LOGIN</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;