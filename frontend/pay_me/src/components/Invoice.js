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
    <h4>
    {invoice.debtor.name} 
    </h4>
    <p>Reason: {invoice.reason}</p>
    <p>Amount: {invoice.amount}</p>
    <button className="deletebutton" onClick={handleDelete}>X</button>
    </Fragment>
  )
}

export default Invoice;