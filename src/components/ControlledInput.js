// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" />
      </form>
    )
  }
}

export default ControlledInput;
