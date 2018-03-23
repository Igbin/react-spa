import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Login from './Login.js';
import Ads from './Ads.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <div>
         <Form />
       </div>
       <div>   
               
                
                 <Link to={'/Login'}>Login</Link>
                 <Link to={'/Ads'}>Ads</Link>
               <Switch>
               <Route  path='/Login' component={Login} />
                  <Route  exactpath='/Form' component={Form} />
                   <Route  path='/Ads' component={Ads} />
              </Switch>
              
               <hr />
        </div>  
          
        
      </div>


    );
  }
}

export default App;
