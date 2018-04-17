import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';
import Ads from './Ads.js';

class Login extends Component {

state = {
	login: this.props.location.login, 
	disabled: JSON.parse(localStorage.getItem("adsArray")) ? document.querySelectorAll('.Ads_item').length >= JSON.parse(localStorage.getItem("adsArray")).length: false,
	currentAdslength: this.props.location.currentAdslength ? this.props.location.currentAdslength :4
}


updateData = (value) => {
   this.setState({ ads: value })
}

addAds = () => {

  this.setState({currentAdslength: this.state.currentAdslength + 5})

}
  render() {
  	 const adsTo = { 
  pathname: "/Ads", 
  login: this.props.location.login,
  updateData: this.updateData 
};
  	 const formTo = { 
  pathname: "/", 
currentAdslength: this.state.currentAdslength
};

var currentAdslength = this.state.currentAdslength;
    return (

     <div className="Login">

     <h1> Hello {this.state.login} </h1>
     <li><Link to={formTo} >Log Out</Link></li>
     <Link to={adsTo}>Create Ad</Link>
}

<div className="Ads">ads:{JSON.parse(localStorage.getItem("adsArray")) ?  JSON.parse(localStorage.getItem("adsArray")).map(function(item, index) {
     { var adTo = { 
  pathname: `Ads/${item.id}`,
  login: adsTo.login,
  id: item.id,
  currentAdslength: currentAdslength
}
if(index <= currentAdslength) {
  return (
    <div key={index} className="Ads_item"> 
 <Link to={adTo}> 

      <p >{item.login}</p>
      <p >{item.title}</p>
      <p >{item.date}</p>
   </Link> </div> 
  )}}   }) : <p>not Ads yet</p> }</div>
{ !JSON.parse(localStorage.getItem("adsArray")) ? 
<button id="addAds" onClick={this.addAds} disabled={true}>Not Yet Ads</button> :
   this.state.currentAdslength >= JSON.parse(localStorage.getItem("adsArray")).length ?

<button id="addAds" onClick={this.addAds} disabled={true}>Nothing to Load More</button> :

 <button id="addAds" onClick={this.addAds}> Load More</button>
}

      </div>
  
    );
  }
}

export default Login;
