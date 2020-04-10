import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ""
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" placeholder="Add new task" onChange={this.handleChange} value={this.state.content} className="list-input"/>
        </form>
        
      </div>
    )
  }
}

export default AddTodo
