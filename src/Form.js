import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login.js';
import { Redirect } from 'react-router';



class Form extends Component {



constructor (props) {
  super(props);
  this.state = {
    login: '',
    password: '',
    formErrors: {login: '', password: ''},
    loginValid: false,
    passwordValid: false,
    formValid: false,
    currentAdslength: this.props.location.currentAdslength ? this.props.location.currentAdslength :4,
  
    
  }

}



 handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let loginValid = this.state.loginValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'login':
        loginValid = value.length > 0;
        fieldValidationErrors.login = loginValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    loginValid: loginValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.loginValid && this.state.passwordValid});
  }

errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


 
 myFunc = () => {

var loginsfromLocal;
  if(JSON.parse(localStorage.getItem("loginsArray"))) {
    loginsfromLocal = JSON.parse(localStorage.getItem("loginsArray"))
  } else {
    loginsfromLocal = [];
  }


console.log(loginsfromLocal)


var log = document.getElementById("login").value;
var pass = document.getElementById("pass").value;
var obj = {login: log,
            password: pass}


if (loginsfromLocal.length === 0) {
  loginsfromLocal.push(obj)
    localStorage.setItem('loginsArray', JSON.stringify(loginsfromLocal)) 
 return this.setState({redirect: true, login:log});
} else{

var checkTrue = loginsfromLocal.every(function(elem) {
  if (elem.login !== log) {
    return true;
  } else {
    return false;
  }
});
var checkFalse = loginsfromLocal.some(function(elem) {
  if (elem.login === log && elem.password !== pass) {
    return true;
  } else {
    return false;
  }
});

var checkGood = loginsfromLocal.some(function(elem) {
  if (elem.login === log && elem.password === pass) {
    return true;
  } else {
    return false;
  }
});

if(checkTrue) {
  loginsfromLocal.push(obj)
    localStorage.setItem('loginsArray', JSON.stringify(loginsfromLocal)) 
 return this.setState({redirect: true, login:log});
}


 else if(checkFalse) {
  return alert("wrong password"); 
} else if(checkGood) {
   return this.setState({redirect: true, login:log});
}
}

  }


 myFunc2 = () => {

console.log(JSON.parse(localStorage.getItem("adsArray")).length + " JSON ")

console.log(document.querySelectorAll('.Ads_item').length + "Current Ads ")

}

addAds = () => {

  this.setState({currentAdslength: this.state.currentAdslength + 5})
  if(JSON.parse(localStorage.getItem("adsArray")) && this.state.currentAdslength >= JSON.parse(localStorage.getItem("adsArray")).length)
this.setState({disabled: true})
}

 render () {
    var loginTo = { 
  pathname: "/Login", 
  login: this.state.login,
  currentAdslength: this.state.currentAdslength
}
var currentAdslength = this.state.currentAdslength;

  if (this.state.redirect) {
    return <Redirect push to={loginTo} />;
  }


   return (
    <div>

     <form className="demoForm">
       <h2>Sign up</h2>
       <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.login)}`}>
         <label htmlFor="login">Login</label>
         <input type="text" className="form-control"
           name="login" id="login" value={this.state.login} onChange={this.handleUserInput}/>
       </div>
       <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control"
           name="password" id="pass" value={this.state.password} onChange={this.handleUserInput}/>
       </div>
 
       <button  type="button" onClick={this.myFunc} className="btn btn-primary" disabled={!this.state.formValid}>
          Sign up
       </button>
   <button  type="button" onClick={this.myFunc2} className="btn btn-primary">
          console up
       </button>
     </form>
 <div className="Ads">ads:{JSON.parse(localStorage.getItem("adsArray")) ? JSON.parse(localStorage.getItem("adsArray")).map(function(item, index) {
 
   { var adTo = { 
  
  
  pathname: `Ads/${item.id}`,
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
     
   )
 }
}


export default Form;