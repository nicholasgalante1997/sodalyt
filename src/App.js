import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h3>Sodalyt</h3>
        <Switch>
          <Route exact path='/test' render={() => (<div>this is a test page</div>)} />
        </Switch>
    </div>
  );
}

export default App;
