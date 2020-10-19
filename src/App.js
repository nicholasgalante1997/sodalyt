import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'

import LandingPage from './components/Landing/LandingPage'
import NewUserCustomerForm from './components/Auth/NewCustomerUserForm'
import SlideShow from './components/Landing/SlideShow'
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <Switch>
          {/* Landing Page */}
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/test' component={NewUserCustomerForm} />
          {/* Test Slideshow Route */}
          {/* <Route exact path='/slideshow' component={SlideShow} /> */}
        </Switch>
    </div>
  );
}

export default App;
