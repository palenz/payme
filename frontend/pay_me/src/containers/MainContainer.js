import React, {useState, useEffect, Fragment} from 'react';
import Group1 from '../Group1.png'
import FU from '../fu.png'
import './MainContainer.css';
import Request from '../helpers/request';
import DebtorForm from '../components/DebtorForm';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';

const MainContainer = () => {

    const [invoices, setInvoices] = useState([]);
    const [debtors, setDebtors] = useState([]);
    const [user, setUser] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        console.log("getting data..");
        let user_id = "8621eb1a-0f26-4587-90a0-f0dd82c02cbf"
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

    return(
        <>
        <div className="nav">
        <img src={Group1} alt="Logo" className="logo"/>
        </div>
        <div className="hero">
        <div className="herowrap">
        <img src={FU} alt="fu" className="fu"/>
        <h5>THE NO-NONSENSE INVOICING SERVICE</h5>
        </div>
        </div>
        <div className="row">
        <div className="column left" >
        <DebtorForm user = {user} onCreate = { handlePost } />
        <InvoiceForm debtors = {debtors} onPost = {handlePostInvoice} onCreate = {handlePostSms}/>
        </div>
        <div className="column right" >
        <InvoiceList invoices = {invoices} onDelete = { handleDelete } />
        </div>
        </div>
        </>
    )
}

export default MainContainer;