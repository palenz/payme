import React, {useState, useEffect, Fragment} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Request from '../helpers/request';

const Register = () => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
    const [verifiedUserId, setVerifiedUserId] = useState(null);
    const [invalidEmail, setInvalidEmail] = useState();


    const handleNameChange = (e) => {
        let userCredentials = credentials;
        userCredentials.name = e.target.value
        setCredentials(userCredentials)
      }

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
        if (credentials.email.includes("@") && credentials.email.includes(".")){
            const request = new Request();
            request.post("http://localhost:8080/signup", credentials)
            .then(async (res) => {
                const raw = await res.text();
                const parsed = JSON.parse(raw);
                setVerifiedUserId(parsed)
            })
            history.push('/')
        } else {setInvalidEmail(true)}
    }

    return(
        <>
        <h4>Sign up here:</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleNameChange}></input>
            <input type="text" placeholder="email" onChange={handleEmailChange}></input>
            <input type="password" placeholder="password" onChange={handlePasswordChange}></input>
            <button type="submit" onClick={Link}>Sign up</button>
        </form>
        {invalidEmail && <h2>Enter a valid email</h2>}
        </>
    );

}

export default Register;