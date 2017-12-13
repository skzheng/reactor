import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import App from './App.js';

let app = (
  <BrowserRouter basename="/#">
    <App/>
  </BrowserRouter>
)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render( 
    app,
    document.getElementById('app')
  )
});