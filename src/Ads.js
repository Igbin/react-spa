import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Ad from './Ad.js';

class Ads extends Component {
state = {
id: JSON.parse(localStorage.getItem("adsArray")) ? JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].id : 0
}


date = () => {
 return new Date().getFullYear()+'-'+ (new Date().getMonth()+1)+'-'+new Date().getDate() + ' '+new Date().getHours() + ':'+new Date().getMinutes() 
}

newAdsadd = () => {
	var arrfromLocal;
    if(JSON.parse(localStorage.getItem("adsArray"))) {
  	arrfromLocal = JSON.parse(localStorage.getItem("adsArray"))
     } else {
  	arrfromLocal = [];
	}
	let title = document.getElementById('title').value
	let description = document.getElementById('description').value
	let obj = {
		id: (arrfromLocal.length)+1,
		title: title,
		description:description,
		login: this.props.location.login,
		date: this.date()
	}
	this.setState({id:obj.id})
	arrfromLocal.push(obj)
	localStorage.setItem("adsArray", JSON.stringify(arrfromLocal))
	return this.setState({redirect: true});
}
render() {

 	var adTo = { 
  	pathname: `Ads/${this.state.id}`, 
  	login: this.props.location.login,
  	id: this.state.id
 	}
	const homeTo = {
	pathname: "/Login", 
  	login: this.props.location.login,
	}
 	if (this.state.redirect) {
    return <Redirect push to={adTo} />;
  	}

   return (
   <div className="CreateAds">
      <form className="demoForm">
      	<h2>Create your Ad</h2>
      	<div className="panel panel-default">
        </div>
     	<div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control"
         name="title" id="title"/>
      	</div>
      	<label htmlFor="description">Description</label>
  	  	<textarea className="form-control" aria-label="With textarea" name="description" id="description" />
      	<button  type="button" onClick={this.newAdsadd} className="btn btn-primary">
      	 Save Ad
      	</button>
      </form>
      <Link to={homeTo}>Back</Link>
    </div>
      );
  }
}

export default Ads;