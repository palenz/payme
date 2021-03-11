import React, {useState, useEffect, Fragment} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Request from '../helpers/request';

const SignIn = ({hello}) => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [verifiedUserId, setVerifiedUserId] = useState(null);
    const [authState, setAuthState] = useState();


    const handleEmailChange = (e) => {
        let userCredentials = credentials;
        userCredentials.email = e.target.value
        setCredentials(userCredentials)
      }
  
    const handlePasswordChange = (e) => {
        let userCredentials = credentials;
        userCredentials.password = e.target.value
        setCredentials(userCredentials)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = new Request();
        request.post("http://localhost:8080/signin", credentials)
        .then(async (res) => {
            const raw = await res.text();
            if (res.status == 500){
                setAuthState(false)
            } else {
                let parsed = JSON.parse(raw);
                setVerifiedUserId(parsed)
                setAuthState(true)
                history.push('/dashboard')
            }})
        // props.EstablishUserId(verifiedUserId);
        
        }

    return(
        <>
        <h4>Sign in here: {hello}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" onChange={handleEmailChange}></input>
            <input type="password" placeholder="password" onChange={handlePasswordChange}></input>
            <button type="submit">Log in</button>
        </form>

        {authState == null ? (<p></p>) : (authState == false ?(<h2>Wrong credentials</h2>) : (<h2>Welcome!</h2>))}
        </>
    );

}

export default SignIn;