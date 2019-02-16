import React from 'react';
import './App.css';
import Form from './comp/Form';
import List from './comp/List';

export default class App extends React.Component {
  state = {
    list: []
  }

  newValue = newValue => {
    newValue = {
      value: newValue,
      id: Math.random() * 1000
    }
    console.log(newValue);
    this.setState({
      list: [...this.state.list, newValue]
    })
  }

  deleteValue = id => {
    console.log(id);
    let list = this.state.list.filter(element => {
      return element.id !== id;
    })
    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
        <Form newValue={this.newValue} />
        <List data={this.state.list} deleteValue={this.deleteValue} />
      </div>
    );
  }
}

