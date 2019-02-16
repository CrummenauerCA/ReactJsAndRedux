import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.newValue(this.state.value);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item: </label>
          <input name="item" value={this.state.value} type="text" onChange={this.handleChange} />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}