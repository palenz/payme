import React, {useState, useEffect, Fragment} from 'react';
import Group1 from '../Group1.png'
import FU from '../fu.png'
import './MainContainer.css';
import Request from '../helpers/request';
import DebtorForm from '../components/DebtorForm';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';
import { useHistory } from 'react-router-dom';

const MainContainer = () => {

    const [invoices, setInvoices] = useState([]);
    const [debtors, setDebtors] = useState([]);
    const [user, setUser] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        checkLogIn();
        getAllData();
    }, []);

    const getAllData = () => {
        console.log("getting data..");
        let user_id = localStorage.getItem("id")
        const request = new Request();
        const userPromise = request.get(`http://localhost:8080/users/${user_id}`)
        const invoicePromise = request.get(`http://localhost:8080/users/${user_id}/invoices`)
        const debtorsPromise = request.get(`http://localhost:8080/users/${user_id}/debtors`)
        


        Promise.all([invoicePromise, debtorsPromise, userPromise])
            .then((data) => {
                setInvoices(data[0]);
                setDebtors(data[1]);
                setUser(data[2]);
            })
            .then(setLoaded(true))   
    }

    let history = useHistory();

    const checkLogIn = () => {
        if (localStorage.length === 0){
            history.push("/signin")
        }
    }

    if (!{invoices}) {
        return null
      }

    const handleDelete = (id) =>  {
        const request = new Request();
          const url = "http://localhost:8080/invoices/" + id
          request.delete(url)
    }

    const handlePost = (debtor) => {
        const request = new Request();
        request.post("http://localhost:8080/debtors", debtor)
    }

    const handlePostInvoice = (invoice) => {
        const request = new Request();
        request.post("http://localhost:8080/invoices", invoice)
    }

    const handlePostSms = (message) => {
        const request = new Request();
        request.post("http://localhost:8080/send-message", message)
    }

    const handleLogOut = () => {
        localStorage.removeItem("id")
        history.push('/signin')
    }

    return(
        <>
        <div className="nav">
        <img src={Group1} alt="Logo" className="logo"/>
        
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
        <div className="row">
        <div className="left" >
        <DebtorForm user = {user} onCreate = { handlePost } />
        <InvoiceForm debtors = {debtors} onPost = {handlePostInvoice} onCreate = {handlePostSms}/>
        </div>
        <div className="right" >
        <InvoiceList invoices = {invoices} onDelete = { handleDelete } />
        </div>
        </div>
        </>
    )
}

export default MainContainer;