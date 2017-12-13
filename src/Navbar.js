import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render(){
    return (
      <div>
       <nav className="navbar navbar-default">
          <h1 className="navbar-brand"><Link to="/">Reactor</Link></h1> 
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item"><Link to='/Login'>Log In</Link></li>
            <li className="nav-item"><Link to='/Signup'>Sign Up</Link></li>
          </ul>
       </nav>
      </div>
    )
  }
}

export default Navbar;