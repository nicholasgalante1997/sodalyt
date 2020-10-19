import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'

import LandingPage from './components/Landing/LandingPage'
import NewUserCustomerForm from './components/Auth/NewCustomerUserForm'
import SlideShow from './components/Landing/SlideShow'
import StoryCardContainer from './components/Story/StoryCardContainer'
import StoryAltPage from './components/Story/StoryAltPage'

import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <Switch>
          {/* Landing Page */}
          <Route exact path='/' component={LandingPage} />
          {/* New User Sign Up */}
          <Route exact path='/c/new' component={NewUserCustomerForm} />
          {/* Story Card Container */}
          <Route exact path='/storycards' component={StoryCardContainer} />
          {/* Alternate Story Route */}
          <Route exact path='/stories/alt' component={StoryAltPage} />
          {/* Test Slideshow Route */}
          {/* <Route exact path='/slideshow' component={SlideShow} /> */}
        </Switch>
    </div>
  );
}

export default App;
