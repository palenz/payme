import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Request from '../helpers/request';

const Register = () => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
    const [invalidEmail, setInvalidEmail] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [wrongPasswordMessage, setWrongPasswordMessage] = useState();


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

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value)
    }

    const checkPasswords = (e) =>{
        e.preventDefault()
        if (repeatPassword === credentials.password){
            handleSubmit()
        } else {
            setWrongPasswordMessage("Passwords don't match.")
        }
    }

    const handleSubmit = (e) => {
        if (credentials.email.includes("@") && credentials.email.includes(".")){
            const request = new Request();
            request.post("http://localhost:8080/signup", credentials)
            .then(async (res) => {
                const raw = await res.text();
                const parsed = JSON.parse(raw);
                localStorage.setItem("id", parsed)
                history.push('/dashboard')
            })
            history.push('/')
        } else {setInvalidEmail(true)}
    }

    return(
        <>
        <h4>Sign up here:</h4>
        <p id="warning">(Don't reuse a password. We didn't spend a lot on security.)</p>
        <form onSubmit>
            <input type="text" placeholder="name" onChange={handleNameChange}></input>
            <input type="text" placeholder="email" onChange={handleEmailChange}></input>
            <input type="password" placeholder="password" onChange={handlePasswordChange}></input>
            <input type="password" placeholder="repeat password" onChange={handleRepeatPasswordChange}></input>
            <button type="submit" onClick={checkPasswords}>Sign up</button>
        </form>
        {wrongPasswordMessage}
        {invalidEmail && <p>Enter a valid email</p>}
        </>
    );

}

export default Register;