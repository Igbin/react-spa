import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';
import Ads from './Ads.js';

class Login extends Component {

state = {
	login: this.props.location.login
}


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

     <h1> Hello {this.state.login} </h1>
     <li><Link to="/" >Log Out</Link></li>
     <Link to={adsTo}>Create Ad</Link>

<div className="Ads">ads:{JSON.parse(localStorage.getItem("adsArray")) ?  JSON.parse(localStorage.getItem("adsArray")).map(function(item, index) {
     { var adTo = { 
  pathname: `Ads/${item.id}`,
  login: adsTo.login,
  id: item.id
}
}
  return (
    <div key={index} className="Ads_item">
 <Link to={adTo}> 
      <p className="news__author">{item.login}</p>
      <p className="news__text">{item.title}</p>
      <p className="news__text">{item.date}</p>
   </Link> </div>
  )}) : <p>not yet</p>}</div>

      </div>
  
    );
  }
}

export default Login;
