import React from 'react'
import prisma from '@/utils/db'

async function TodoList() {
  
    const todos = await prisma.todo.findMany()

  return (
    <div className=''>
        {todos.map(i => <div className='w-full h-36 text-primary'>{i.content}</div>)}
    </div>
  )
}

export default TodoList