import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h3>Sodalyt</h3>
        <Switch>
          <Route path='/test' render={() => { return (
            <div>
              <p>This is a test page</p>
            </div>
          )}} />
        </Switch>
    </div>
  );
}

export default App;
