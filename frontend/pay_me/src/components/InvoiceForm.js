import React, { Component } from 'react';


class InvoiceForm extends Component {


      constructor(props) {
      super(props);
        this.state = {
            debtor: {
              name: "",
              email: "",
              user: props.user
            }
          }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleUser = this.handleUser.bind(this);
        }


    componentDidMount() {
      if(this.props.debtor) {
        this.setState({debtor: {... this.props.debtor}})
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
      </>
      )

    }
  
  }


export default InvoiceForm;