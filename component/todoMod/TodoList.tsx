
import React from 'react'
import TodoItem from './TodoItem';

async function TodoList({todos}) {
  console.log(todos);
    

  return (
    <div className=''>
        {/* {todos.map(i => <TodoItem todo={i} />)} */}
    </div>
  )
}

export default TodoList