import React from 'react'

function TodoItem({todo}) {
  return (
    <div>{todo.content}</div>
  )
}

export default TodoItem