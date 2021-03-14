import Group1 from '../Group1.png'
import FU from '../fu.png'
import { useHistory } from 'react-router-dom';
import './Docs.css';

const Docs = () => {

    let history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem("id")
        history.push('/signin')
    }

    const token = localStorage.getItem("id");


    return(
        <>

        <div className="nav">
        <a href="/dashboard">
        <img src={Group1} alt="Logo" className="logo"/>
        </a>
        <nav>
        <ul id="menu">
            <li><a href="/about">About</a></li>
            <li><a href="/docs">Docs</a></li>
            <li><a href="/" onClick={handleLogOut}>Log out</a></li>
        </ul>
        </nav>
        
        </div>
        <div className="hero">
        <div className="herowrap">
        <img src={FU} alt="fu" className="fu"/>
        <h5>THE NO-NONSENSE INVOICING SERVICE</h5>
        </div>
        </div>
        
        <div className="contentWrapper" >
        <div className="content">
        
        <h1>FU Pay Me's Documentation</h1>
        <br></br>
        <p>Your unique token is: <div id="token">{token}</div> Don't share this.</p>
        
        
        </div>
        </div>


        </>
    )
}

export default Docs;