import React, { Component, useEffect } from 'react';


class InvoiceForm extends Component {

      constructor(props) {
      super(props);
        this.state = {
            debtor: {
              name: "",
              email: "",
              user: {   
          
              },
              invoices: [
 
              ]
            }
          }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleUser = this.handleUser.bind(this);
        }

        useEffect () {
          updateUser();
      }, [this.props.soleUser];


      updateUser(){
        const newDebtor = {debtor: {... this.props.debtor}, 
        user: {   
        id: this.props.soleUser.id,
        name: this.props.soleUser.name,
        email: this.props.soleUser.email
  
      }}
        this.setState(newDebtor)
      }


    componentDidUpdate(prevState) {
      console.log("mounted");
      if(this.props.loaded) {
        // this.setState({debtor: {... this.props.debtor}})
        const newDebtor = {debtor: {... this.props.debtor}, 
        user: {   
        id: this.props.soleUser.id,
        name: this.props.soleUser.name,
        email: this.props.soleUser.email
  
      }}
        this.setState(newDebtor)
      }
    }

    // handleUser(e){
    //   const index = parseInt(e.target.value)
    //   const selectedUser = this.props.user[index]
    //   let debtor = this
    // }

    handleChange(e) {
      let debtorName = e.target.name;
      let newDebtor = this.state.debtor
      newDebtor[debtorName] = e.target.value;
      this.setState({debtor: newDebtor})
    }

    handleSubmit(e) {
      e.preventDefault();
       this.props.onCreate(this.state.debtor)
    }

    render(){

    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="debtor name" name="name" onChange={this.handleChange} value={this.state.debtor.name} />
        <input type="text" placeholder="debtor email" name="email" onChange={this.handleChange} value={this.state.debtor.email} />
        <button type="submit">save</button>
        </form>
        <h1>{this.props.soleUser.name}</h1>
      </>
      )

    }
  
  }


export default InvoiceForm;