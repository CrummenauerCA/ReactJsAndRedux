import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Comprar leite'},
      {id: 2, content: 'Aprender Redux'}
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    })
  }

  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Tarefas</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;