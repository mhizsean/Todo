import React, { Component } from 'react'
import './App.css';
import Todos from './Todo';
import AddTodo from './AddTodo';

class componentName extends Component {

  state = {
      todos: [
          {id: 1, content: "take a stroll"}, 
          {id: 2, content: "take a walk"}, 
          {id: 3, content: "take a jump"}, 
      ]
  }

  deleteTodo = (id) => {
      const todoDelete = this.state.todos.filter(todo => {
          return todo.id !== id
      });

      this.setState({
          todos: todoDelete
      })
  }

  addTodo = (todo) => {
      todo.is = Math.random();
      let newTodos = [...this.state.todos, todo]
      this.setState({
          todos: newTodos
      })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Today's Task</h2>
        </div>
        <div className="body">
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
        
        
      </div>
    )
  }
}

export default componentName
