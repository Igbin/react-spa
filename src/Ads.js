import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Ad from './Ad.js';

class Ads extends Component {

state = {
message: 'alex',
id: JSON.parse(localStorage.getItem("adsArray")) ? JSON.parse(localStorage.getItem("adsArray")).length+1 : 0
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
	console.log(this.state.id)
arrfromLocal.push(obj)
localStorage.setItem("adsArray", JSON.stringify(arrfromLocal))
return this.setState({redirect: true});
}

propstoapp = () => {
	 this.props.location.updateData(this.state.ads)
}

  render() {
 var adTo = { 
  pathname: `Ads/${this.state.id}`, 
  login: this.props.location.login,
}

 	if (this.state.redirect) {
    return <Redirect push to={adTo} />;
  }
    return (

     <div className="CreateAds">
     <p>Props: {this.props.location.param1}</p>
     <p>State: {this.state.message}</p>
     <label htmlFor="title">Title</label>
     <input type="text" name="title" id="title" />
     <label htmlFor="description">Desctription</label>
     <input type="textarea" name="description" id="description"/>

     <button onClick={this.newAdsadd}>Create Ad</button>
     <button onClick={ this.propstoapp}>Запустить бумеранг</button>
     <Link to="/Login" >Home</Link>
		<Link to="Ads/3">Link to ad</Link>



      </div>



  
    );
  }
}

export default Ads;