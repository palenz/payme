import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/request';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceList from '../components/InvoiceList';

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
        const userPromise = request.get('http://localhost:8080/users/8417fc7b-f6af-4b26-8b12-1821deaa394d')
        const invoicePromise = request.get('http://localhost:8080/users/8417fc7b-f6af-4b26-8b12-1821deaa394d/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/8417fc7b-f6af-4b26-8b12-1821deaa394d/debtors')
        


        Promise.all([invoicePromise, debtorsPromise, userPromise])
            .then((data) => {
                setInvoices(data[0]);
                setDebtors(data[1]);
                setUser(data[2]);
            })


    }

    if (!{invoices}) {
        return null
      }

    const addInvoice = (submittedInvoice) => {
        const updatedInvoices = [...invoices, submittedInvoice];
        setInvoices(updatedInvoices);
    }

    return(
        <>
        <InvoiceForm onInvoiceSubmit={(invoice) => addInvoice(invoice)}/>
        <InvoiceList invoices = {invoices}/>
        </>
    )
}

export default MainContainer;