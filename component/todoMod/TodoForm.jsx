import React from 'react'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'


const createTodo = async(formData) => {
    "use server"
    const todo = formData.get("todo")
     await prisma.todo.create({
        data: {
            content: todo
        }
    })
    
    revalidatePath('/todo')
}
function TodoForm() {

  return (
    <form action={createTodo}>
        <input type="text" name='todo' required/>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default TodoForm