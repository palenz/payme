import React, {Fragment} from 'react';

const Invoice = ({invoice}) => {

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
    </Fragment>
  )
}

export default Invoice;