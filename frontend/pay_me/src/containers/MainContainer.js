import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/request';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceList from '../components/InvoiceList';

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
        const userPromise = request.get('http://localhost:8080/users/f1387b9d-0e12-44ad-b325-c7be9e5fdd54')
        const invoicePromise = request.get('http://localhost:8080/users/f1387b9d-0e12-44ad-b325-c7be9e5fdd54/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/f1387b9d-0e12-44ad-b325-c7be9e5fdd54/debtors')
        


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

    const addInvoice = (submittedInvoice) => {
        const updatedInvoices = [...invoices, submittedInvoice];
        setInvoices(updatedInvoices);
    }


    const handlePost = (debtor) => {
        const request = new Request();
        request.post("http://localhost:8080/debtors", debtor)
    }

    return(
        <>
        <InvoiceForm soleUser = {user} onCreate = { handlePost } />
        <InvoiceList invoices = {invoices}/>
        
        </>
    )
}

export default MainContainer;