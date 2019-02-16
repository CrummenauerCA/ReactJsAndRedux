import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Comprar leite'},
      {id: 2, content: 'Aprender Redux'}
    ]
  }

  addTodo = todo => {
    todo = {
      id: Math.random() * 10,
      content: todo
    }
    this.setState({
      todos: [...this.state.todos, todo]
    })
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
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;