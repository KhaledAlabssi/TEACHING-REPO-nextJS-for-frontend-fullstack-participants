import React from 'react'
import prisma from '@/utils/db'

const dbHandler = async () => {
    await prisma.todo.create({
        data: {
            content: "walk the dog"
        }
    })
    const todos = await prisma.todo.findMany()
}
function dbExamplePage() {
  return (
    <div>dbExamplePage</div>
  )
}

export default dbExamplePage