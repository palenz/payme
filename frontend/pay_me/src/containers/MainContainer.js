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
        const userPromise = request.get('http://localhost:8080/users/a7474d16-4164-4413-8067-436ecc969290')
        const invoicePromise = request.get('http://localhost:8080/users/a7474d16-4164-4413-8067-436ecc969290/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/a7474d16-4164-4413-8067-436ecc969290/debtors')
        


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


    const handlePost = (debtor) => {
        const request = new Request();
        request.post("http://localhost:8080/debtors", debtor)
    }

    return(
        <>
        <InvoiceForm  onCreate = { handlePost } />
        <InvoiceList invoices = {invoices}/>
        </>
    )
}

export default MainContainer;