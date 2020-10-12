import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Amplify, { API } from 'aws-amplify';
import config from './aws-exports'
Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'test-sodalyt',
        endpoint: 'https://61msatt1jf.execute-api.us-east-2.amazonaws.com/Beta'
      }
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route path='/' component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
