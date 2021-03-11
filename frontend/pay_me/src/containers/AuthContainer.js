import React, {useState} from 'react';
import SignIn from '../components/SignIn';
import MainContainer from './MainContainer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const AuthContainer = () => {
    
    return(
        <>
        <h1>Fuck you. Pay me.</h1>
        <SignIn></SignIn>

        <h4><Link to="/signup">Or register here</Link></h4>

        </>
    );
}

export default AuthContainer;