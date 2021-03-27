import Menu from './Menu.js';

import './Docs.css';

const Docs = () => {

    const token = localStorage.getItem("id");


    return(
        <>

        <Menu></Menu>
        
        <div className="contentWrapper" >
        <div className="content">
        
        <h1>Pay Me's Documentation</h1>
        
        <p id='text'>Maybe you've used this too much and now it's getting out of hand. 
        You can use the API endpoints below to view your stored information.</p>
        <p>The root endpoint should prefix all resources and is only accessible over HTTPS.</p>
        <p>Your unique ID is:  <div id="token">{token}</div></p>
        
        <p>To view all your information:</p> <p id="code">/users/id</p>   
        <p>To view all your debtors:</p><p id='code'>/users/id/debtors</p>
        <p>To view all your invoices:</p><p id='code'>/users/id/invoices</p>
        
        </div>
        </div>


        </>
    )
}

export default Docs;