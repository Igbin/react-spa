import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Login.css';
import Ads from './Ads.js';

class Login extends Component {
state = {
	login: this.props.location.login, 
	disabled: JSON.parse(localStorage.getItem("adsArray")) ? document.querySelectorAll('.Ads_item').length >= JSON.parse(localStorage.getItem("adsArray")).length: false,
	currentAdslength: this.props.location.currentAdslength ? this.props.location.currentAdslength :5
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

  function compareNumeric(a, b) {
 	 if (a.id > b.id) return -1;
 	 if (a.id < b.id) return 1;
  }

return (
	<div>
    	<div className="Login">
    		<h1> Hello {this.state.login} </h1>
     		<Link to={formTo} >Log Out</Link>
     		<Link to={adsTo} className="Create">Create Ad</Link>
     	</div>
		<div className="Ads">current ads:{JSON.parse(localStorage.getItem("adsArray")) ?  JSON.parse(localStorage.getItem("adsArray")).sort(compareNumeric).map(function(item, index) {
    	 	{ var adTo = { 
 	 		 pathname: `Ads/${item.id}`,
 			 login: adsTo.login,
  			 id: item.id,
 			 currentAdslength: currentAdslength
     		}
	 		if(index < currentAdslength) {
 	 		return (
    		<div key={index} className="card-body Ads_item"> 
 				<Link to={adTo}> 
      				<p> Author: {item.login}</p>
           			<p> Title: {item.title}</p>
            		<p> Creation date: {item.date}</p>
   				</Link> 
    		</div> 
 	 		)}}   }) : <p>not Ads yet</p> }
 	 	</div>
		{ !JSON.parse(localStorage.getItem("adsArray")) ? 
		<button id="addAds" onClick={this.addAds} disabled={true} className="btn">Not Yet Ads</button> :
    	this.state.currentAdslength >= JSON.parse(localStorage.getItem("adsArray")).length ?
		<button id="addAds" onClick={this.addAds} disabled={true} className="btn">Nothing to Load More</button> :
 		<button id="addAds" onClick={this.addAds} className="btn"> Load More</button>
		}
    </div>
     );
  }
}

export default Login;
