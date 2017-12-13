const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const parser = require('body-parser');
const app = express();
const compiler = webpack(webpackConfig);
const request = require('request');


app.use(parser.json());
app.use(express.static(__dirname + '/www'));

app.post('/subscribe', function(req,res){
  let email = req.body.email;
  request.post({
    url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php',
    form: {email: email}}, 
    function(err,httpResponse,body){ 
      console.log(httpResponse);
  })
  .on('response', response => {
    res.send(response);
  })
  .on('error', error => {
    console.log(error);
  })
});

app.post('/login', function(req,res){
  let email = req.body.email;
  let password = req.body.password;
  request.post({
    url: 'http://dev3.apppartner.com/Reactors/scripts/user-login.php',
    form: {
      email: email,
      password: password
    }}, 
    function(err,httpResponse,body){ 
      console.log( httpResponse);
  })
  .on('error', error => {
    console.log('error', error);
  })
  .on('response', response => {
    res.send(response);
  })
});

app.post('/signup', function(req,res){
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  request.post({
    url: 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php',
    form: {
      username: username,
      email: email,
      password: password
    }}, 
    function(err,httpResponse,body){ 
      console.log(httpResponse);
  })
  .on('error', error => {
    console.log('error', error);
  })
  .on('response', response => {
    console.log(response);
    res.send(response);
  })
})

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors:true,
  },
  historyApiFallback:true,
}));

const server = app.listen(3000, function(){
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
