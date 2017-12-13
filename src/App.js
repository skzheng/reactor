import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {}
  }

  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Signup' component={Signup}/>
          <Route path="*" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;