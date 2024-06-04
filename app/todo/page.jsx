import React from 'react'
import TodoForm from '../../component/todoMod/TodoForm'
import TodoList from '../../component/todoMod/TodoList'
import TodoDeleteForm from '../../component/todoMod/TodoDeleteForm'
import prisma from '@/utils/db'



const createData = async (d) => {
    const todos = await prisma.todo.create({
        data: {
            content: d
        }
    })
}
const deleteData = async (i) => {
    const todos = await prisma.todo.delete({
        where : {
            id: i
        }
    })
}


function todoPage() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className="flex w-1/3 h-1/2 bg-blue-50 p-6">

        <TodoForm />
        <TodoList />
        <TodoDeleteForm />

        </div>
    </div>
  )
}

export default todoPage