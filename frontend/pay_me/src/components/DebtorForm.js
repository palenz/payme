import React, { useEffect, useState } from 'react';
import './DebtorForm.css';

const DebtorForm = (props) => {

    const [debtor, setDebtor] = useState({name: "", mobile: "", user: undefined});
    const [mobileCheck, setMobileCheck] = useState();
    const [warning, setWarning] = useState();

    useEffect(() => {
      setDebtor({...debtor, user: props.user})
    }, [props.user])


    const handleNameChange = (e) => {
      let newDebtor = debtor;
      newDebtor.name = e.target.value
      setDebtor(newDebtor)
    }

    const handleMobileChange = (e) => {
      if (e.target.value.slice(0,2) === "07" && e.target.value.length === 11){
        var newDebtor = debtor;
        newDebtor.mobile = "+44" + e.target.value.slice(1)
        setMobileCheck(true)
      } else {
        setMobileCheck(false)
      }
    }

    const handleSubmit = () => {
      props.onCreate(debtor);
      setDebtor({name: "", mobile: "", user: undefined})
      window.location.reload();
    }

    const checkMobile = (e) => {
      e.preventDefault();
      if (!mobileCheck || !debtor.name || debtor.name.includes('"')){
        setWarning(1)
      } else {
        handleSubmit()
      }
    }

    return (
      <>
      <div className='debtorform'>
        <h1>Add someone to invoice</h1>
        <form onSubmit={checkMobile}>
        <input type="text" placeholder="debtor's name" name="name" onChange={handleNameChange}/>
        <input type="text" placeholder="debtor's mobile (must be a UK number, eg: 07961234567)" name="mobile" onChange={handleMobileChange}/>
        <button type="submit">save</button> {warning===1 && <p>Invalid name/number</p>}
        </form>
        </div>
      </>
      )
  
}

export default DebtorForm;