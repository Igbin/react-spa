import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';
import Ads from './Ads.js';

class Login extends Component {

updateData = (value) => {
   this.setState({ ads: value })
}


  render() {
  	 const adsTo = { 
  pathname: "/Ads", 
  login: this.props.location.login,
  updateData: this.updateData 
};

    return (

     <div className="Login">

     <h1> Hello {this.props.location.login} </h1>
     <li><Link to="/" >Log Out</Link></li>
     <Link to={adsTo}>Create Ad</Link>

<div className="Ads">ads:{JSON.parse(localStorage.getItem("adsArray")) ?  JSON.parse(localStorage.getItem("adsArray")).map(function(item, index) {
  return (
    <div key={index} className="Ads_item">
{/*    <li><Link to={`/Ads/${stuff.id}`} activeClassName="active">{item.title}</Link></li>*/}
      <p className="news__author">{item.login}</p>
      <p className="news__text">{item.title}</p>
      <p className="news__text">{item.date}</p>
    </div>
  )}) : <p>not yet</p>}</div>

      </div>
  
    );
  }
}

export default Login;
