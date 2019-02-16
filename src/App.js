import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Comprar leite'},
      {id: 2, content: 'Aprender Redux'}
    ]
  }

  render() {
    return(
      <div className="App">
        <h1 className="center blue-text">Tarefas</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;