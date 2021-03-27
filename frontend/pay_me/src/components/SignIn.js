import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Request from '../helpers/request';

const SignIn = ({hello}) => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({email: "", password: ""});
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
            if (res.status === 500){
                setAuthState(false)
            } else {
                let parsed = JSON.parse(raw);
                setAuthState(true)
                localStorage.setItem("id", parsed)
                history.push('/dashboard')
            }})
        }

    return(
        <>
        <h4>Sign in{hello}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" onChange={handleEmailChange}></input>
            <input type="password" placeholder="password" onChange={handlePasswordChange}></input>
            <br></br>
            <button type="submit">Log in</button>
        </form>

        {authState === "empty" ? (<p></p>) : (authState === false ?(<p>Wrong credentials</p>) : (null))}
        </>
    );

}

export default SignIn;