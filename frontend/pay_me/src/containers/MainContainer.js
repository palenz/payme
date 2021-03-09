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
        const userPromise = request.get('http://localhost:8080/users/83a85226-1f57-46ca-aa64-e053eaa2ac0e')
        const invoicePromise = request.get('http://localhost:8080/users/83a85226-1f57-46ca-aa64-e053eaa2ac0e/invoices')
        const debtorsPromise = request.get('http://localhost:8080/users/83a85226-1f57-46ca-aa64-e053eaa2ac0e/debtors')
        


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
        <InvoiceForm user = {user} onCreate = { handlePost } />
        <InvoiceList invoices = {invoices}/>
        
        </>
    )
}

export default MainContainer;