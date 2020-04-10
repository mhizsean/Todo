import React from 'react'

/**
* @author
* @function Todos
**/

const Todos = ({todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="list">
                    <span >{todo.content}</span>
                    <i onClick={() => {deleteTodo(todo.id)}} class="fas fa-minus-circle"></i>

                    {/* <button >Delete</button> */}
                </div>
            )
        })
    ) : 
    
    (
        <p>You are done with all your tasks!</p>
    );
  return(
    <div className="todo-list">
        {todoList}
    </div>
   )

 }

export default Todos