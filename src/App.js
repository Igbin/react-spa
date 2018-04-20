import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Login from './Login.js';
import Ads from './Ads.js';
import Ad from './Ad.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class App extends Component {


clearData = () => { localStorage.clear()}

  render() {

    return (
     <div className="App">
    <p>Local Storage Ads length:{JSON.parse(localStorage.getItem("adsArray")) ? 
    JSON.parse(localStorage.getItem("adsArray")).length : "0"} </p>
       <div>   
                  <Switch>
                   <Route  path='/Login' component={Login} />
                   <Route path="/Ads/:id" component={Ad} />
                   <Route  path='/Ads' component={Ads} />
                    <Route  exactpath='/' component={Form} />
                   </Switch>                       
                  {/* <button onClick={this.clearData}>clearData</button>  */}
        </div>  
          <div>         
          </div>
      </div>
    );
  }
}

export default App;

