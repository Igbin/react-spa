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
for(var i = 0; i<=loginsfromLocal.length;i++) {

   if (loginsfromLocal.length > 0 && log!==loginsfromLocal[i].login) {
      loginsfromLocal.push(obj)
      localStorage.setItem('loginsArray', JSON.stringify(loginsfromLocal)) 
     console.log("case for login #2")
     console.log(log=== loginsfromLocal[1].login)
      return    this.setState({redirect: true, login:log});
    } else if (loginsfromLocal.length === 0) {
        loginsfromLocal.push(obj)
      localStorage.setItem('loginsArray', JSON.stringify(loginsfromLocal)) 
      console.log("case 1")
      return    this.setState({redirect: true, login:log});

  } else if (log===loginsfromLocal[i].login && pass!==loginsfromLocal[i].password) {
    console.log("case 2")
    console.log(loginsfromLocal[i].password)
    return alert("wrong password"); 
} else if (log===loginsfromLocal[i].login && pass===loginsfromLocal[i].password) {
console.log("case 3")
    return    this.setState({redirect: true, login:log});
    
    

  } 
}
  }


 myFunc2 = () => {
console.log(Object.keys(localStorage))
for (let key in localStorage) {
console.log(localStorage[key])}
}


 render () {
    var loginTo = { 
  pathname: "/Login", 
  login: this.state.login
}
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
  return (
    <div key={index} className="Ads_item">
{/*    <li><Link to={`/Ads/${stuff.id}`} activeClassName="active">{item.title}</Link></li>*/}
      <p >{item.login}</p>
      <p >{item.title}</p>
      <p >{item.date}</p>
    </div>
  )}) : <p>not yet</p> }</div>

     

</div>
     
   )
 }
}


export default Form;