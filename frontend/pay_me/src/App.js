import './App.css';
import React, {useState, useEffect, Fragment} from 'react';
import AuthContainer from './containers/AuthContainer'
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register';
import About from './components/About';
import Docs from './components/Docs';

function App() {
  
  return (
    <Router>
    <>
   
      <Route exact path="/" component={AuthContainer} />
      <Route exact path="/signin" component={AuthContainer} />
      <Route path="/dashboard" component={MainContainer} />
      <Route path="/signup" component={Register} />
      <Route path="/about" component={About}/>
      <Route path="/docs" component={Docs}/>

    </>
    </Router>
  );
}

export default App;