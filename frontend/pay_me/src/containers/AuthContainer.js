import React from 'react';
import SignIn from '../components/SignIn';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Group1 from '../Group1.png'
import FU from '../fu.png'

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
        
        <div className="contentWrapper" >
        <div className="content">
        
        <h1>Pay me.</h1>
        <br></br>
        <p>We take care of spamming those forgetful friends, coworkers and clients to pay you back.</p>
        
        </div>
        </div>


        <SignIn></SignIn>

        <p><Link to="/signup">Or register here</Link></p>

        </>
    );
}

export default AuthContainer;