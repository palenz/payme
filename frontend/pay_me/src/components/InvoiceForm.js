import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const InvoiceForm = (props) => {

    const [invoice, setInvoice] = useState({amount: 0, reason: "", settlementDate: null, debtor: undefined});
    const [warning, setWarning] =useState()

    useEffect(() => {
      setInvoice({...invoice, user: props.dedtor})
    }, [props.user])

    let history = useHistory();

    const handleAmountChange = (e) => {
      let newInvoice = invoice;
      newInvoice.amount = e.target.value
      setInvoice(newInvoice)
    }

    const handleReasonChange = (e) => {
      let newInvoice = invoice;
      newInvoice.reason = e.target.value
      setInvoice(newInvoice)
    }

    const handleDebtor = (e) => {
        setWarning(false)
        let newInvoice = invoice;
        const index = parseInt(e.target.value)
        const selectedDebtor = props.debtors[index]
        newInvoice.debtor = selectedDebtor
        setInvoice(newInvoice)
      }


    const handleSubmit = (e) => {
      props.postInvoice(invoice);
      console.log(invoice);
      setInvoice({name: "", mobile: "", settlementDate: null, debtor: undefined})
      window.location.reload();
    }

    const handleVerifyDebtorSelection = (e) => {
      e.preventDefault();
      if (invoice.debtor){
        verifyWholeNumber()
      } else {
        setWarning(1)
      }
    }

    const verifyWholeNumber = (e) => {
      if (invoice.amount.includes(".")){
        setWarning(2)
    } else {
      handleSubmit();
      }
    }

    const debtorOptions = props.debtors.map((debtor, index) => {
        return <option key={debtor.id} value={index}>{debtor.name}</option>
    });

    const handleDeleteDebtor = (e) => {
      if (window.confirm('Are you sure? This will delete all invoices belonging to this debtor')){
        props.deleteDebtor(invoice.debtor.id)
        window.location.reload();
        }
      }

    return (
      <>
      <div className='debtorform'>
      <h1>Create invoice or delete debtor</h1>
        <form onSubmit={handleVerifyDebtorSelection}>
        <select name="debtor" onChange={handleDebtor} defaultValue={'select-debtor'}>
        <option disabled value="select-debtor">Select a Debtor</option>
        {debtorOptions}
        </select>
        <input type="number" placeholder="amount (whole numbers only)" name="amount" min="0" step="1" oninput="validity.valid||(value='')" onChange={handleAmountChange}/>
        <input type="text" placeholder="reason" name="reason" onChange={handleReasonChange}/>
        <button type="submit">send</button > {warning==1 && <p>Select a debtor.</p>}
          {warning==2 &&<p>You must use whole numbers for the amount.</p>}
          {invoice.debtor && <button type="button" id="negativeButton" onClick={handleDeleteDebtor}>delete debtor</button>}
        </form>
        </div>
      </>
      )
  
}

export default InvoiceForm;