import React from 'react'
import TodoForm from '../../component/todoMod/TodoForm'
import TodoList from '../../component/todoMod/TodoList'
import TodoDeleteForm from '../../component/todoMod/TodoDeleteForm'
import prisma from '@/utils/db'

const getData = async () => {
    const d = await prisma.todo.findMany()
}

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


async function todoPage() {

    const items = await getData()
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className="flex w-1/3 h-1/2 bg-blue-50 p-6">

        <TodoForm />
        <TodoList todos={items} />
        <TodoDeleteForm />

        </div>
    </div>
  )
}

export default todoPage