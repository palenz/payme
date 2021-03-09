import React, {Fragment} from 'react';

const Invoice = ({invoice, onDelete}) => {


  const handleDelete = () => {
    onDelete(invoice.id)
  }


  if (!invoice){
    return "Loading..."
  }


  return (
    <Fragment>
    <h1>
    {invoice.debtor.name} 
    </h1>
    <p>Reason: {invoice.reason}</p>
    <p>Amount: {invoice.amount}</p>
    <button onClick={handleDelete}>Delete</button>
    </Fragment>
  )
}

export default Invoice;