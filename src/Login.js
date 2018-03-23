import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render() {
    return (

     <div className="Login">

     <h1> Hello Login! </h1>
     <li><Link to="/" >Home</Link></li>
      </div>
  
    );
  }
}

export default Login;
