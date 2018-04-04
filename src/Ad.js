import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Ad extends Component {


state = {

}

deleteAd = () => {

	let arrfromlocal = JSON.parse(localStorage.getItem("adsArray"))
	arrfromlocal.pop();
	localStorage.removeItem("adsArray")
	localStorage.setItem("adsArray", JSON.stringify(arrfromlocal))
	return this.setState({redirect: true});
}


render() {

var loginTo2 = { 
  pathname: "/Login", 
  login: this.props.location.login
}

if (this.state.redirect) {
    return <Redirect push to={loginTo2} />;
  }
    return (

     <div className="Ad">
<p>Hello {this.props.location.login} I am Ad # {JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].id}</p>
<p>Author: {JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].login}</p>
<p>{JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].title}</p>
 <p>{JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].description}</p>
<p>{JSON.parse(localStorage.getItem("adsArray"))[JSON.parse(localStorage.getItem("adsArray")).length-1].date}</p>


<Link to={loginTo2}>Home</Link>

<button onClick={this.deleteAd}>Delete this Ad</button>
  </div>
)


}
}
export default Ad;