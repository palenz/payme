import React from 'react';
import SignIn from '../components/SignIn';
import { BrowserRouter as Link } from "react-router-dom";
import Group1 from '../Group1.png'
import FU from '../fu.png'
import './AuthContainer.css';
import Register from '../components/Register';
import LandingContent from '../components/landingContent';

const AuthContainer = () => {
    
    return(
        <>

        <div className="nav">
        <a href="/dashboard">
        <img src={Group1} alt="Logo" className="logo"/>
        </a>        
        </div>

        <div className="hero">
        <div className="herowrap">
        <img src={FU} alt="fu" className="fu"/>
        <h5>THE NO-NONSENSE INVOICING SERVICE</h5>
        </div>
        </div>
        
        <div id="homeWrapper" >
        
        <div id="homeContent">
        <LandingContent></LandingContent>
        </div>
        
        <div id="signIn">
        <SignIn></SignIn>


        <div id="register">
        <Register></Register>
        </div>

        </div>

        </div>


        </>
    );
}

export default AuthContainer;