import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <DebtorForm user = {user} onCreate = { handlePost } />
        <InvoiceForm debtors = {debtors} onCreate = {handlePostInvoice} onCreate = {handlePostSms}/>
        <InvoiceList invoices = {invoices} onDelete = { handleDelete }/>
        </>
    )
}

export default MainContainer;