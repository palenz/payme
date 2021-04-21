import React from 'react';
import Invoice from './Invoice.js';
import searchDebtor from './searchDebtor.js';


const InvoiceList = (props) => {

	if (props.invoices.length === 0){
	  return (<p>None so far...</p>)
	}

	const invoices = props.invoices.map((invoice, index) => {
	  return (
	    <li key={index} >
	    <div>
	    <Invoice invoice={invoice} onDelete = { props.onDelete }/>
	    </div>
	    </li>
	  )
	})

	return (
	<>
		<searchDebtor></searchDebtor>
		<h1>Outstanding invoices</h1>

			<ul >
				{invoices}
			</ul>
		
		<div id="total">
			<h4>Total:</h4>
			<b>£{props.totalOwed}</b>
		</div>
	</>
	)
}
 export default InvoiceList;