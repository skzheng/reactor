import React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleUsername(e){
    this.setState({username: e.target.value});
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  handleSignup(){
    if(this.state.username && this.state.email && this.state.password){
      axios.post('/signup', {
        username: this.state.username,
        email : this.state.email,
        password: this.state.password
      })
      .then(res => {
        if(res.data.statusCode === 404 || res.data.statusCode === 401 || res.data.statusCode === 400){
          swal('Username or E-mail is already in use', '' , 'error')
        } else {
        swal('Signed Up!','', 'success')
        console.log("Successfully signed up, data => ", res.data);
        this.props.history.push("/login");
        }
      })
      .catch(error => {
        console.log("Error signing up", error.response);
      })
    } else {
      swal('Error', 'Please fill out all fields!', 'error')
    }
  }

  render(){
    return (
      <div id="login">
        <div className="loginForm">
          <div className="logNav">
            <h4 style={{textDecoration: 'underline'}}>SIGN UP</h4>
            <h4 className="logNavBtn" style={{opacity: '0.2'}}><Link to="/login">LOGIN</Link></h4>
          </div>
          <div className="ig">
            <img className="username" src="/assets/ic-username.png" />
            <input className="form-control" type="text" placeholder="Username" autoComplete="off" onInput={this.handleUsername}/>
          </div>
          <div className="ig">
            <img className="email" src="/assets/ic-email.png" />
            <input className="form-control" type="email" placeholder="Email" autoComplete="off" onInput={this.handleEmail}/>
          </div>
          <div className="ig">
            <img className="password" src="/assets/ic-password.png"/>
            <input className="form-control" type="password" placeholder="Password" autoComplete="new-password" onInput={this.handlePassword}/>
          <button className="btn" onClick={this.handleSignup}>SIGN UP</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;