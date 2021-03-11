import './App.css';
import React, {useState, useEffect, Fragment} from 'react';
import AuthContainer from './containers/AuthContainer'
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register'

function App() {
  
  const [id, setId] = useState(null);
  
  const EstablishUserId = (id) => {
    setId(id)
  }

  return (
    <Router>
    <>
   
      <Route exact path="/" component={AuthContainer} />
      <Route exact path="/signin" hello="hello" component={AuthContainer} />
      <Route path="/dashboard" userId = {id} component={MainContainer} />
      <Route path="/signup" component={Register} />

    </>
    </Router>
  );
}

export default App;