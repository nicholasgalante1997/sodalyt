import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

const testURL = 'https://61msatt1jf.execute-api.us-east-2.amazonaws.com/Beta'

async function fetchData(){
  fetch(testURL)
  .then(r => r.json()
  .then(data => {
    console.log(data)
  }))
}

function App() {
  fetchData()
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
