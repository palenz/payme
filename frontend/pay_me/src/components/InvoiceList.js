import React from 'react';
import Invoice from './Invoice.js';


const InvoiceList = (props) => {

	if (props.invoices.length === 0){
	  return (<p>Loading...</p>)
	}

	const invoices = props.invoices.map((invoice, index) => {
	  return (
	    <li key={index} >
	    <div >
	    <Invoice invoice={invoice} onDelete = { props.onDelete }/>
	    </div>
	    </li>
	  )
	})

	return (
	  <ul >
	    {invoices}
	  </ul>
	)
}
 export default InvoiceList;