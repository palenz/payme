import React, {useState, useEffect, Fragment} from 'react';
import './MainContainer.css';
import Menu from '../components/Menu.js';
import Request from '../helpers/request';
import DebtorForm from '../components/DebtorForm';
import InvoiceList from '../components/InvoiceList';
import InvoiceForm from '../components/InvoiceForm';
import { useHistory } from 'react-router-dom';

const MainContainer = () => {

    const [invoices, setInvoices] = useState([]);
    const [debtors, setDebtors] = useState([]);
    const [user, setUser] = useState([]);
    const [totalOwed, setTotalOwed] = useState(0);

    useEffect(() => {
        checkLogIn();
        getAllData();
    }, []);

    useEffect(() => {
        fetchTotalOwed();
    }, [invoices]);

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

    const fetchTotalOwed = () => {
        let total = 0
        for (let invoice of invoices){
            total += invoice.amount;
        }
        return setTotalOwed(total);
    }

    const handleDelete = (id) =>  {
        const request = new Request();
        let url = "http://localhost:8080/invoices/" + id
        request.delete(url)
    }

    const deleteDebtor = (id) =>  {
        const request = new Request();
        let url = "http://localhost:8080/debtors/" + id
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
        <Menu></Menu>
       

        <div className="row">
        <div className="left" >
        <DebtorForm user = {user} onCreate = { handlePost } />
        <InvoiceForm debtors = {debtors} postInvoice={handlePostInvoice} deleteDebtor={deleteDebtor}/>
        </div>
        <div className="right">
        <InvoiceList invoices = {invoices} totalOwed = {totalOwed} onDelete = { handleDelete } />
        </div>
        </div>
        </>
    )
}

export default MainContainer;