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
        const request = new Request();
        const userPromise = request.get('http://localhost:8080/users/cba36036-9f44-41e9-b0a6-f029f2e8422f')
        const invoicePromise = request.get('http://localhost:8080/users/cba36036-9f44-41e9-b0a6-f029f2e8422f/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/cba36036-9f44-41e9-b0a6-f029f2e8422f/debtors')
        


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

    return(
        <>
        <DebtorForm user = {user} onCreate = { handlePost } />
        <InvoiceForm debtors = {debtors} onCreate = {handlePostInvoice} />
        <InvoiceList invoices = {invoices} onDelete = { handleDelete }/>
        
        </>
    )
}

export default MainContainer;