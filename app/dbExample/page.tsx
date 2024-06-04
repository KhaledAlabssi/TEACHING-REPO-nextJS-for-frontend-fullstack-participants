import React from 'react'
import prisma from '@/utils/db'

const dbHandler = async () => {
    await prisma.todo.create({
        data: {
            content: "walk the dog"
        }
    })
    // const todos = await prisma.todo.findMany()
    const todos = await prisma.todo.findMany({
        orderBy: {
            completed: 'asc'
        }
    })

    return todos
}
async function dbExamplePage() {
    const todosData = await dbHandler()
  return (
    <div>
        {todosData.map(i => <p key={i.id}>{i.content}</p>)}
    </div>
  )
}

export default dbExamplePage