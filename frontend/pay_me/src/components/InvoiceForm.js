import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const InvoiceForm = (props) => {

    const [invoice, setInvoice] = useState({amount: 0, reason: "", settlementDate: null, debtor: undefined});
    const [message, setMessage] = useState({mobile:"", message: ""})

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
        let newInvoice = invoice;
        const index = parseInt(e.target.value)
        const selectedDebtor = props.debtors[index]
        newInvoice.debtor = selectedDebtor
        setInvoice(newInvoice)
      }

    const handleSms =(e) => {
        let newSms = message;
        newSms.mobile = invoice.debtor.mobile; 
        newSms.message = "Hello, " + invoice.debtor.name + "... FUCK YOU, PAY ME! " + "you owe me " + invoice.amount + "quid, because" + invoice.reason + "... Bye";
        setMessage(newSms);
        props.onCreate(message);
    }


    const handleSubmit = (e) => {
      props.onPost(invoice);
      console.log(invoice);
      setInvoice({name: "", mobile: "", settlementDate: null, debtor: undefined})
    }

   

    const debtorOptions = props.debtors.map((debtor, index) => {
        return <option key={debtor.id} value={index}>{debtor.name}</option>
    });

    return (
      <>
      <div className='debtorform'>
      <h1>Create invoice</h1>
        <form onSubmit={handleSubmit} >
        <select name="debtor" onChange={handleDebtor} defaultValue={'select-debtor'}>
        <option disabled value="select-debtor">Select a Debtor</option>
        {debtorOptions}
        </select>
        <input type="number" placeholder="amount" name="amount" onChange={handleAmountChange}/>
        <input type="text" placeholder="reason" name="reason" onChange={handleReasonChange}/>
        <button onClick = {handleSms} type="submit">send</button >
        </form>
        </div>
      </>
      )
  
}

export default InvoiceForm;