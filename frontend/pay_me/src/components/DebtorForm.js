import React, { useEffect, useState } from 'react';


const DebtorForm = (props) => {

    const [debtor, setDebtor] = useState({name: "", email: "", user: undefined});

    useEffect(() => {
      setDebtor({...debtor, user: props.user})
    }, [props.user])

    const handleNameChange = (e) => {
      let newDebtor = debtor;
      newDebtor.name = e.target.value
      setDebtor(newDebtor)
    }

    const handleEmailChange = (e) => {
      let newDebtor = debtor;
      newDebtor.email = e.target.value
      setDebtor(newDebtor)
    }

    const handleSubmit = (e) => {
      props.onCreate(debtor);
      setDebtor({name: "", email: "", user: undefined})
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="debtor name" name="name" onChange={handleNameChange}/>
        <input type="text" placeholder="debtor email" name="email" onChange={handleEmailChange}/>
        <button type="submit">save</button>
        </form>
      </>
      )
  
}

export default DebtorForm;