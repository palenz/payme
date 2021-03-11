import React, {Fragment} from 'react';
import './Invoice.css';
const Invoice = ({invoice, onDelete}) => {


  const handleDelete = () => {
    onDelete(invoice.id)
    window.location.reload(false);
  }


  if (!invoice){
    return "Loading..."
  }


  return (
    <Fragment>
    <div className="invoicewrap">
      <div className="invoicetextwrap">
        <h4>
        {invoice.debtor.name} 
        </h4>
        <p>{invoice.reason}</p>
        <h6>£{invoice.amount}</h6>
      </div>
        <div className="invoicetbuttonwrap">
        <button className="deletebutton" onClick={handleDelete}>X</button>
        </div>
    </div> 
    <div className="line"></div>
    </Fragment>
  )
}

export default Invoice;