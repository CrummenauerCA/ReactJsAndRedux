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
    this.props.addTodo(this.state.content);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Adicionar nova tarefa: </label>
          <input value={this.state.content} type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
