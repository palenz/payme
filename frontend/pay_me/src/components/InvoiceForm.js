import React, { useEffect, useState } from 'react';


const InvoiceForm = (props) => {

    const [invoice, setInvoice] = useState({amount: 0, reason: "", settlementDate: null, debtor: undefined});


    useEffect(() => {
      setInvoice({...invoice, user: props.d})
    }, [props.user])

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
        let newInvoice = invoice;
        const index = parseInt(e.target.value)
        const selectedDebtor = props.debtors[index]
        newInvoice.debtor = selectedDebtor
        setInvoice(newInvoice)
      }


    const handleSubmit = (e) => {
      
      props.onCreate(invoice);
      console.log(invoice);
      setInvoice({name: "", email: "", settlementDate: null, debtor: undefined})
    }

    const debtorOptions = props.debtors.map((debtor, index) => {
        return <option key={debtor.id} value={index}>{debtor.name}</option>
    });

    return (
      <>
        <form onSubmit={handleSubmit}>
        <select name="debtor" onChange={handleDebtor} defaultValue={'select-ship'}>
        <option disabled value="select-debtor">Select a Debtor</option>
        {debtorOptions}
        </select>
        <input type="number" placeholder="amount" name="amount" onChange={handleAmountChange}/>
        <input type="text" placeholder="reason" name="reason" onChange={handleReasonChange}/>
        <button type="submit">save</button>
        </form>
      </>
      )
  
}

export default InvoiceForm;