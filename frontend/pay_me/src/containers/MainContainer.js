import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/request';
import InvoiceForm from '../components/InvoiceForm'

const MainContainer = () => {

    const [invoices, setInvoices] = useState([]);
    const [debtors, setDebtors] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        getAllData();
    }, [invoices]);

    const getAllData = () => {
        console.log("getting data..");
        const request = new Request();
        const userPromise = request.get('/')
        const invoicePromise = request.get('/users/${user_id}/invoices')
        const debtorsPromise = request.get('/')
        


        Promise.all([invoicePromise, debtorsPromise, userPromise])
            .then((data) => {
                setInvoices(data[0]);
                setDebtors(data[1]);
                setUser(data[2]);
            })


    }

    const addInvoice = (submittedInvoice) => {
        const updatedInvoices = [...invoices, submittedInvoice];
        setInvoices(updatedInvoices);
    }

    return(
        <InvoiceForm onInvoiceSubmit={(invoice) => addInvoice(invoice)}/>
    )
}

export default MainContainer;