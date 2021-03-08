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
    }, []);

    const getAllData = () => {
        console.log("getting data..");
        const request = new Request();
        const userPromise = request.get('http://localhost:8080/users/98c3b7d1-7557-4b49-a4f3-51f6edb1ef1f')
        const invoicePromise = request.get('http://localhost:8080/users/98c3b7d1-7557-4b49-a4f3-51f6edb1ef1f/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/98c3b7d1-7557-4b49-a4f3-51f6edb1ef1f/debtors')
        


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