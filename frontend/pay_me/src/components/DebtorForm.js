import React, { useEffect, useState } from 'react';
import './DebtorForm.css';


const DebtorForm = (props) => {

    const [debtor, setDebtor] = useState({name: "", mobile: "", user: undefined});

    useEffect(() => {
      setDebtor({...debtor, user: props.user})
    }, [props.user])

    const handleNameChange = (e) => {
      let newDebtor = debtor;
      newDebtor.name = e.target.value
      setDebtor(newDebtor)
    }

    const handleMobileChange = (e) => {
      let newDebtor = debtor;
      newDebtor.mobile = e.target.value
      setDebtor(newDebtor)
    }

    const handleSubmit = (e) => {
      props.onCreate(debtor);
      setDebtor({name: "", mobile: "", user: undefined})
    }

    return (
      <>
      <div className='debtorform'>
        <h1>Add someone to invoice</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="debtor name" name="name" onChange={handleNameChange}/>
        <input type="text" placeholder="debtor mobile" name="mobile" onChange={handleMobileChange}/>
        <button type="submit">save</button>
        </form>
        </div>
      </>
      )
  
}

export default DebtorForm;