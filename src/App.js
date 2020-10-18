import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './components/Landing/LandingPage'
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
    </div>
  );
}

export default App;
