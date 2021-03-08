import React, { useState } from 'react';


const InvoiceForm = ({onInvoiceSubmit}) => {

    const [debtorName, setDebtorName] = useState("");
    const [debtorEmail, setDebtorEmail] = useState("");

    const [invoiceAmount, setInvoiceAmount] = useState(0);
    const [invoiceReason, setInvoiceReason] = useState("");

    const handleDebtorNameChange = (e) => {
        setDebtorName(e.target.value);
    }

    const handleDebtorEmailChange = (e) => {
        setDebtorEmail(e.target.value);
    }

    const handleInvoiceReasonChange = (e) => {
        setInvoiceReason(e.target.value);
    }


    const handleInvoiceAmountChange = (e) => {
        setInvoiceAmount(e.target.value);
    }


    const handleInvoiceSubmit = (e) => {
        e.preventDefault();
        const debtorNameToSubmit = debtorName.trim();
        const debtorEmailToSubmit = debtorEmail.trim();
        const invoiceReasonToSunbmit = invoiceReason.trim();
        const invoiceAmountToSubmit = invoiceAmount;

        onInvoiceSubmit({
            debtorName: debtorNameToSubmit,
            debtorEmail: debtorEmailToSubmit,
            invoiceReason: invoiceReasonToSunbmit,
            inviceAmount: invoiceAmountToSubmit
        });

        setInvoiceAmount(0);
        setInvoiceReason("");
        setDebtorName("");
        setDebtorEmail("");
    }


    return (
        <form onSubmit={handleInvoiceSubmit}>
          <input 
            type="text"
            placeholder="Dedtors name"
            value={debtorName}
            onChange={handleDebtorNameChange}
          />
          <input 
            type="text"
            placeholder="Dedtors email"
            value={debtorEmail}
            onChange={handleDebtorEmailChange}
          />
          <input 
            type="text"
            placeholder="Reason"
            value={invoiceReason}
            onChange={handleInvoiceReasonChange}
          />
          <input 
            type="number"
            placeholder="Amount"
            value={invoiceAmount}
            onChange={handleInvoiceAmountChange}
          />
          <input 
            type="submit"
            value="Post"
          />
        </form>
      )
}

export default InvoiceForm;