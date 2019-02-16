import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Adicionar nova tarefa: </label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
