import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Ad extends Component {
state = {
	arrfromlocal: JSON.parse(localStorage.getItem("adsArray")),
	ad: {}
}

deleteAd = () => {
	let arrfromlocal = this.state.arrfromlocal;
	for (var i = 0; i < arrfromlocal.length; i++) {
	if(arrfromlocal[i].id === this.props.location.id) {
		arrfromlocal.splice(i,1)
	}
	}
	localStorage.removeItem("adsArray")
	localStorage.setItem("adsArray", JSON.stringify(arrfromlocal))
	return this.setState({redirect: true});
}

renderAd = () => {
	var arrfromlocal = this.state.arrfromlocal;
	var thisAd;
	for (var i = 0; i < arrfromlocal.length; i++) {
	if(arrfromlocal[i].id === this.props.location.id) {
		return thisAd= arrfromlocal[i];
	}
	}
}

render() {
	var loginTo2 = { 
  	pathname: this.props.location.login ? "/Login" : "/", 
 	login: this.props.location.login,
  	currentAdslength: this.props.location.currentAdslength 
};
	if (this.state.redirect) {
    return <Redirect push to={loginTo2} />;
  }
	var ad = this.renderAd()
    return (
    <div className="Ad">
    	<p> Hello I am Ad number  {this.props.location.id}   from Props</p>
    	<div className="Adsmall">
     		<p>Author: {ad.login} </p>
     		<p>Title: {ad.title} </p>
     		<p>description: {ad.description} </p>
     		<p>creaton date: {ad.date} </p>
     	</div>	
		<button className="btn btn-danger" onClick={this.deleteAd}  disabled={this.props.location.login !== ad.login}>Delete this Ad</button>
		<Link to={loginTo2}>Home</Link>
  	</div>
)


}
}
export default Ad;